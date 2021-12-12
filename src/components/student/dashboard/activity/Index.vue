<template>
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
        mdi-arrow-left
      </v-icon>
      <span class="headline tbl-title">List of Activity</span>
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
    <v-data-table
      :headers="headers"
      :items="activity"
      :items-per-page="entryValue"
      class="elevation-0"
      hide-default-footer
    >
      <template v-slot:[`item.totalQuestions`]="{ item }">
        <div>
          {{ get(item,'questions').length }}
        </div>
      </template>
      <template v-slot:[`item.created_at`]="{ item }">
        <div>
          {{ formatDate(get(item,'created_at')) }}
        </div>
      </template>
      <template v-slot:[`item.status`]="{  }">
        <div class="success--text text--lighten-1">
          Status
        </div>
      </template>
      <template v-slot:[`item.action`]="{  }">
        <div class="blue--text text--lighten-1">
          Start
        </div>
      </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
      <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing 0 to 0 of 0 entries</span>
      </div>
      <v-pagination
        v-model="page"
        :length="Math.ceil(1/entryValue)"
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
        @click="$router.push('activity/create')"
      >New</v-btn>
    </div>
  </v-card>
</template>

<script>
import moment from 'moment'
import {get} from 'lodash'
export default {
  data(){
    return{
      get,
      page: 1,
      entryValue: 10,
      entryOptions: [5,10,20,50,100],
      searchString: '',
      headers: [
        { text: 'Activity Name', value: 'activityName', sortable: true },
        { text: 'Number of questions', value: 'totalQuestions', sortable: true },
        { text: 'Date Created', value: 'created_at', sortable: true },
        { text: 'Status', value: 'status'},
        { text: 'Action', value: 'action', sortable: false }
      ],
    }
  },
  computed:{
    activity(){
      return this.$store.getters['studentActivity/getActivity']
    }
  },
  mounted(){
    this.getActivities()
  },
  methods:{
    back(){
      console.log('back')
    },
    formatDate(date){
      if(date){
        return moment(date).format('MMM DD, YYYY')
      }
      return '-'
    },
    getActivities(){
      this.$store.dispatch('studentActivity/getActivity')
    }
  }
}
</script>

<style>

</style>