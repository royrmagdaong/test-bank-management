<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline tbl-title">List of Professor</span>
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
                :items="entryOptions"
                v-model="entryValue"
            ></v-combobox>
        </div>
        <div class="d-flex align-center">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Search: </span>
            <v-text-field 
            dense 
            hide-details
            outlined
            color="grey lighten-1"
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="instructors"
        :items-per-page="entryValue"
        class="elevation-0"
        hide-default-footer
    >
        <template v-slot:[`item.full_name`]="{ item }">
            <div>
                {{ get(item, 'first_name') }} {{ get(item, 'last_name') }}
            </div>
        </template>
        <template v-slot:[`item.specialization`]="{ item }">
            <div>
                {{ get(item, 'specialization') }}
            </div>
        </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
    <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ instructors.length }} entries</span>
    </div>
    <v-pagination
        v-model="page"
        :length="Math.ceil(instructors.length/entryValue)"
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
            { text: 'Fullname', value: 'full_name', sortable: true },
            { text: 'Specialization', value: 'specialization', sortable: true },
            { text: 'Email Address', value: 'email', sortable: true }
            ],
        }
    },
    computed:{
        instructors(){
            return this.$store.getters['studentSubjects/getInstructors']
        }
    },
    mounted(){
    },
    methods:{
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < this.instructors.length ? ((this.page)*(this.entryValue)) : this.instructors.length
        },
        getFirstnumEntryCount(val){
            return this.instructors.length===0?0:val
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