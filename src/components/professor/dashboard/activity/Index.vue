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
      :items="activities"
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
      <template v-slot:[`item.class_list`]="{  }">
          <div class="blue--text text--lighten-2">
              View List
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
        :length="Math.ceil(activities.length/entryValue)"
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
import {get} from 'lodash'
import moment from 'moment'

export default {
  data(){
    return {
      get,
      page: 1,
      entryValue: 10,
      entryOptions: [5,10,20,50,100],
      searchString: '',
      headers: [
        { text: 'Activity Name', value: 'activityName', sortable: true },
        { text: 'Number of questions', value: 'totalQuestions', sortable: true },
        { text: 'Date Created', value: 'created_at', sortable: true },
        { text: 'Class', value: 'class_list', sortable: true }
      ],
    }
  },
  computed:{
    activities(){
      return this.$store.getters['adminActivity/getActivities']
    }
  },
  mounted(){
    this.getActivities()
  },
  methods:{
    back(){
      this.$router.push('/professor/dashboard')
    },
    formatDate(date){
      if(date){
        return moment(date).format('MMM DD, YYYY')
      }
      return '-'
    },
    getActivities(){
      this.$store.dispatch('adminActivity/getProfActivities').then(res=>{
        if(res.response){
          console.log(res.data)
        }
      })
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