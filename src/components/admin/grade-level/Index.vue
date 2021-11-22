<template>
  <div>
    <div>
        <span class="headline">List of Year and Section</span>
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
            @change="getGradeLevel"
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
            @input="getGradeLevel"
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="get(grade_level, 'data')"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        item-key="index"
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
        <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ get(grade_level,'count') }} entries</span>
    </div>
    <v-pagination
        v-model="page"
        :length="Math.ceil(get(grade_level,'count')/entryValue)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class=""
        color="grey lighten-1"
    ></v-pagination>
    </div>
    <div>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
        >New</v-btn>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
        >Delete Selected</v-btn>
    </div>
  </div>
</template>

<script>
import {get, debounce} from 'lodash'
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
            { text: 'Grade', value: 'grade_level', sortable: true },
            { text: 'Description', value: 'description', sortable: true }
            ],
            searchGradeLevel: debounce(()=>{
                this.$store.dispatch('adminGradeLevel/getGradeLevel', {
                    searchString: this.searchString,
                    limit: this.entryValue,
                    skip: ((this.page-1) * this.entryValue)
                })
            }, 300)
        }
    },
    computed:{
        grade_level(){
            return this.$store.getters['adminGradeLevel/getGradeLevel']
        }
    },
    mounted(){
        this.getGradeLevel()
    },
    methods:{
        getGradeLevel(){
            this.page = 1;
            this.searchGradeLevel()
        },
        paginate(){
            this.searchGradeLevel()
        },
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < get(this.grade_level, 'count') ? ((this.page)*(this.entryValue)) : get(this.grade_level, 'count')
        },
        getFirstnumEntryCount(val){
            return get(this.grade_level, 'count')===0?0:val
        }
    }
}
</script>

<style>

</style>