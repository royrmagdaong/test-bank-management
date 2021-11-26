<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline tbl-title">List of Students</span>
    </div>

      <div class="mt-4 mb-2 d-flex justify-space-between align-center">
        <div class=" d-flex align-center">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
            <v-combobox
                style="max-width:120px !important;"
                outlined
                dense
                hide-details
                color="grey lighten-1"
                v-model="entryValue"
                :items="entryOptions"
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
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="students"
        :items-per-page="entryValue"
        class="elevation-0"
        hide-default-footer
    >
        <template v-slot:[`item.full_name`]="{ item }">
            <div>
                {{ get(item,'studentInfo.first_name') }} {{ get(item,'studentInfo.last_name') }}
            </div>
        </template>
        <template v-slot:[`item.subject`]="{ item }">
            <div>
                {{ get(item,'subject') }}
            </div>
        </template>
        <template v-slot:[`item.student_id`]="{ item }">
            <div>
                {{ get(item,'studentInfo.student_id') }}
            </div>
        </template>
        <template v-slot:[`item.gender`]="{ item }">
            <div>
                {{ get(item,'studentInfo.gender') }}
            </div>
        </template>
        <template v-slot:[`item.email`]="{ item }">
            <div>
                {{ get(item,'studentInfo.email') }}
            </div>
        </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
    <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ students.length }} entries</span>
    </div>
    <v-pagination
        v-model="page"
        :length="Math.ceil(students.length/entryValue)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class=""
        color="grey lighten-1"
    ></v-pagination>
    </div>
  </v-card>
</template>

<script>
import {get} from 'lodash'
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
                { text: 'ID number', value: 'student_id', sortable: true },
                { text: 'Name', value: 'full_name', sortable: true },
                { text: 'Subject', value: 'subject', sortable: true },
                { text: 'Gender', value: 'gender', sortable: true },
                { text: 'Email Address', value: 'email', sortable: true }
            ],
        }
    },
    computed:{
        students(){
            return this.$store.getters['professorSubjects/getStudents']
        }
    },
    mounted(){
    },
    methods:{
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < this.students.length ? ((this.page)*(this.entryValue)) : this.students.length
        },
        getFirstnumEntryCount(val){
            return this.students.length===0?0:val
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