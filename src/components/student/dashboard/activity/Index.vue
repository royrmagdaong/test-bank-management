<template>
  <v-card class="pa-4" tile>
    <div class="d-flex justify-space-between">
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
      <template v-slot:[`item.subject`]="{ item }">
        <div>
          {{ get(item,'subj_id.code') }} - {{ get(item,'subj_id.description') }}
        </div>
      </template>
      <template v-slot:[`item.created_at`]="{ item }">
        <div>
          {{ formatDate(get(item,'created_at')) }}
        </div>
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <div class="success--text text--lighten-1" v-if="get(item, 'in_progress')">
          In Progress
        </div>
        <div class="success--text text--lighten-1" v-if="get(item, 'is_done')">
          Done
        </div>
        <div class="success--text text--lighten-1" v-if="!get(item, 'is_done') && !get(item, 'in_progress')">
          Pending
        </div>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <div class="blue--text text--lighten-1 action-item" v-if="get(item, 'in_progress')" @click="startExam(item)">
          Start
        </div>
        <div class="blue--text text--lighten-1 action-item" v-if="get(item, 'is_done')">
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
        { text: 'Subject', value: 'subject', sortable: true },
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
      this.$router.push('/student/dashboard')
    },
    formatDate(date){
      if(date){
        return moment(date).format('MMM DD, YYYY')
      }
      return '-'
    },
    getActivities(){
      this.$store.dispatch('studentActivity/getActivity').then(res=>{
        console.log(res)
      })
    },
    startExam(item){
      this.$router.push(`activity/${item._id}`)
    },
  }
}
</script>

<style scoped>
.action-item:hover{
  cursor: pointer;
  text-decoration: underline;
}
</style>