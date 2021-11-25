<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline tbl-title">List of Subjects</span>
    </div>

      <div class="mt-4 mb-2 d-flex justify-space-between align-center">
        <div class=" d-flex align-center">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
            <v-combobox
                style="max-width:120px !important;"
                outlined
                dense
                hide-details
                v-model="entryValue"
                :items="entryOptions"
                color="grey lighten-1"
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
        :items="subjects"
        :items-per-page="entryValue"
        class="elevation-0"
        hide-default-footer
    >
        <template v-slot:[`item.class_code`]="{ item }">
            <div>
                {{ get(item, 'class_code.code') }}
            </div>
        </template>
        <template v-slot:[`item.description`]="{ item }">
            <div>
                {{ get(item, 'class_code.description') }}
            </div>
        </template>
        <template v-slot:[`item.instructor`]="{ item }">
            <div>
                {{ get(item, 'instructor.first_name') }} {{ get(item, 'instructor.last_name') }}
            </div>
        </template>
        <template v-slot:[`item.room`]="{ item }">
            <div>
                {{ get(item, 'room.room') }}
            </div>
        </template>
        <template v-slot:[`item.section`]="{ item }">
            <div>
                {{ get(item, 'section.grade_level') }} - {{ get(item, 'section.section') }}
            </div>
        </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
    <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ subjects.length }} entries</span>
    </div>
        <v-pagination
            v-model="page"
            :length="Math.ceil(subjects.length/entryValue)"
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
                { text: 'Subject code', value: 'class_code', sortable: true },
                { text: 'Description', value: 'description', sortable: true },
                { text: 'Instructor', value: 'instructor', sortable: true },
                { text: 'Days and Time', value: 'days_and_time', sortable: true },
                { text: 'Room', value: 'room', sortable: true },
                { text: 'Section', value: 'section', sortable: true }
            ],
        }
    },
    computed:{
        subjects(){
            return this.$store.getters['studentSubjects/getSubjects']
        }
    },
    mounted(){
        // call 
        this.$root.$emit('getSubjectsAndInstructors')
    },
    methods:{
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < this.subjects.length ? ((this.page)*(this.entryValue)) : this.subjects.length
        },
        getFirstnumEntryCount(val){
            return this.subjects.length===0?0:val
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