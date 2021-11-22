<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline">List of Subjects</span>
    </div>

      <div class="mt-4 d-flex justify-space-between align-center">
        <div class=" d-flex align-center mb-4">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
            <v-combobox
            style="max-width:120px !important;"
            :items="entryOptions"
            v-model="entryValue"
            outlined
            dense
            hide-details
            color="grey lighten-1"
            @change="getSubjects"
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
            @input="getSubjects"
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="get(subjects,'data')"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        item-key="subject_code"
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
        <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ get(subjects,'count') }} entries</span>
    </div>
    <v-pagination
        v-model="page"
        :length="Math.ceil(get(subjects,'count')/entryValue)"
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
            @click="$router.push('subjects/create')"
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
        return{
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
                { text: 'Subject', value: 'code', sortable: true },
                { text: 'Description', value: 'description', sortable: true },
                { text: 'Grade level', value: 'grade_level', sortable: true },
            ],
            searchSubjects: debounce(()=>{
                this.$store.dispatch('adminSubjects/getSubjects', {
                    searchString: this.searchString,
                    limit: this.entryValue,
                    skip: ((this.page-1) * this.entryValue)
                })
            }, 300)
        }
    },
    computed:{
        subjects(){
            return this.$store.getters['adminSubjects/getSubjects']
        },
    },
    mounted(){
        this.getSubjects()
    },
    methods:{
        getSubjects(){
            this.page = 1
            this.searchSubjects()
        },
        paginate(){
            this.searchSubjects()
        },
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < get(this.subjects, 'count') ? ((this.page)*(this.entryValue)) : get(this.subjects, 'count')
        },
        getFirstnumEntryCount(val){
            return get(this.subjects, 'count')===0?0:val
        }
    }
}
</script>

<style>

</style>