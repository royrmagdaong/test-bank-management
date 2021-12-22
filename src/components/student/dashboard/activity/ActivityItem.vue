<template>
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <!-- <v-icon color="" @click="back" class="mr-2">
        mdi-arrow-left
      </v-icon> -->
      <span class="headline tbl-title">
        {{ get(activity, 'subj_id.code') }}
         - 
        {{ get(activity, 'subj_id.description') }}
         - 
        <span class="blue--text text--lighten-1">{{ get(activity, 'activityName') }}</span>
      </span>
    </div>

    <div class="pl-6 mt-6">
      <div v-for="(question,index) in get(activity,'questions')" :key="index">
        <div class="body-1">{{index+1}}. {{ get(question, 'question') }}</div>
        <v-radio-group class="mt-0 ml-4" v-model="answers[index]">
          <v-radio
            return-object
            v-for="(choice,index2) in get(question, 'choices')"
            :key="index2"
            :label="get(choice,'answer')"
            :value="choice"
          ></v-radio>
        </v-radio-group>
      </div>
      <div class="d-flex justify-end">
        <v-btn color="success" @click="submit">Submit</v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import {get} from 'lodash'
export default {
  data(){
    return{
      get,
      answers:[]
    }
  },
  computed:{
    activity(){
      return this.$store.getters['studentActivity/getStudentActivity']
    }
  },
  mounted(){
    this.getActivity()
  },
  methods:{
    back(){
      this.$router.push('/student/dashboard/activity')
    },
    getActivity(){
      this.$store.dispatch('studentActivity/getStudentActivity',{
        activity_id: this.$route.params.id
      }).then(res=>{
        console.log(res.data)
      })
    },
    submit(){
      console.log(this.answers)
    }
  }
}
</script>

<style>

</style>