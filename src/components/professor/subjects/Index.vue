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
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="[]"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        item-key="id_number"
        hide-default-footer
        show-select
        :single-select="false"
    >
        <!-- <template v-slot:[`item.view`]="{ item }">
            <div class="view-student" @click="view(item)">
                View
            </div>
        </template> -->
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
    <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <!-- <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ get(professors,'count') }} entries</span> -->
    </div>
    <v-pagination
        v-model="page"
        :length="1"
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
        }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
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