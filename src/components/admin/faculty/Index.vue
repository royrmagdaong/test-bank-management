<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline tbl-title">List of Faculty</span>
    </div>

      <div class="mt-4 mb-2 d-flex justify-space-between align-center">
        <div class=" d-flex align-center">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
            <v-combobox
            style="max-width:120px !important;"
            :items="entryOptions"
            v-model="entryValue"
            outlined
            dense
            hide-details
            color="grey lighten-1"
            @input="getProfessors"
            ></v-combobox>
        </div>
        <div class="d-flex align-center">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Search: </span>
            <v-text-field 
            dense 
            hide-details
            outlined
            color="grey lighten-1"
            v-model="searchString"
            @input="getProfessors"
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="get(professors, 'data')"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        item-key="id_number"
        hide-default-footer
        v-model="selected"
        show-select
        :single-select="false"
    >
        <template v-slot:[`item.view`]="{ item }">
            <div class="view-student" @click="view(item)">
                View
            </div>
        </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
    <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing {{ ((page-1)*entryValue)+1 }} to {{ getEntryCount() }} of {{ get(professors,'count') }} entries</span>
    </div>
    <v-pagination
        v-model="page"
        :length="Math.ceil(get(professors,'count')/entryValue)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class=""
        color="grey lighten-1"
        @input="paginate"
    ></v-pagination>
    </div>
    <div>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
            @click="$router.push('faculty/create')"
        >New</v-btn>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
        >Delete Selected</v-btn>
    </div>
  </v-card>
</template>

<script>
import {get,debounce} from 'lodash'
export default {
    data(){
        return {
            get,
            selected:[],
            page: 1,
            entryOptions:[5,10,20,50,100],
            entryValue: 10,
            searchString: '',
            headers: [
            {
                text: 'No.',
                align: 'left',
                sortable: true,
                value: 'index',
            },
            { text: 'ID number', value: 'id_number', sortable: true },
            { text: 'Fullname', value: 'full_name', sortable: true },
            { text: 'Address', value: 'address', sortable: true },
            { text: 'Gender', value: 'gender', sortable: true },
            { text: 'Civil Status', value: 'civil_status', sortable: true },
            { text: 'Specialization', value: 'specialization', sortable: true },
            { text: 'Email Address', value: 'email', sortable: true }
            ],
            searchProf: debounce(()=>{
                this.$store.dispatch('adminFaculty/fetchProf', {
                    searchString: this.searchString,
                    limit: this.entryValue,
                    skip: ((this.page-1) * this.entryValue)
                })
            }, 300)
        }
    },
    computed:{
        professors(){
            return this.$store.getters['adminFaculty/getProfessor']
        }
    },
    mounted(){
        this.getProfessors()
        // this.$store.dispatch('adminFaculty/fetchProf')
    },
    methods:{
        getProfessors(){
            this.page = 1
            this.searchProf()
        },
        paginate(){
            this.searchProf()
        },
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < get(this.professors, 'count') ? ((this.page)*(this.entryValue)) : get(this.professors, 'count')
        }
    }
}
</script>

<style scoped>
@media only screen and (max-width: 480px) {
  .tbl-title{
    font-size: 18px !important;
  }
}
</style>