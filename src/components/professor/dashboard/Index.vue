<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-space-between">
      <v-card tile class="py-2 px-4 d-flex align-center">
        <span class="headline tbl-title">Professor Dashboard</span>
      </v-card>
      <v-card tile class="py-2 px-4">
        <v-text-field
          hide-details
          dense
          outlined
          label="Search"
        ></v-text-field>
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card tile class="pa-4 dashboard-item" @click="routeTo('dashboard/exam')" height="200">
        <div class="title text-center">EXAM</div>
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card tile class="pa-4 dashboard-item" @click="routeTo('dashboard/quiz')" height="200">
        <div class="title text-center">QUIZ</div>
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card tile class="pa-4 dashboard-item" @click="routeTo('dashboard/activity')" height="200">
        <div class="title text-center">ACTIVITY</div>
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card tile class="pa-4 dashboard-item" @click="routeTo('dashboard/module')" height="200">
        <div class="title text-center">MODULE</div>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card tile class="pa-4 dashboard-item" @click="routeTo('dashboard/growth-development')" height="200">
        <div class="title text-center">GROWTH DEVELOPMENT</div>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card tile class="pa-4 dashboard-item" @click="routeTo('dashboard/notes')" height="200">
        <div class="title text-center">NOTES</div>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card tile class="pa-4 dashboard-item" @click="routeTo('dashboard/notes')" height="200">
        <div class="title text-center">RETAKE</div>
      </v-card>
    </v-col>
  </v-row>
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
    routeTo(route){
      if(this.$route.path !== route){
        this.$router.push(route)
      }
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
.dashboard-item{
  cursor: pointer;
}
.dashboard-item:hover{
  background-color: #85E783;
}
</style>