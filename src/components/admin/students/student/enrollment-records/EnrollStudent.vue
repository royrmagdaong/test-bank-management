<template>
<v-col cols="8" offset="2">
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
          mdi-arrow-left
      </v-icon>
      <div class="headline grey--text text--darken-1">
          Enroll Student
      </div>
    </div>
    
    <div class="mt-10">
      <v-row no-gutters>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">ID Number:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Name:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Status:</div>
          <v-combobox
            class="my-input"
            color="grey"
            :items="status"
            outlined
            dense
            hide-details
          ></v-combobox>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Year and Section:</div>
          <v-combobox
            class="my-input"
            color="grey"
            :items="status"
            outlined
            dense
            hide-details
          ></v-combobox>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Academic Year:</div>
          <v-combobox
            class="my-input"
            color="grey"
            :items="status"
            outlined
            dense
            hide-details
          ></v-combobox>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2 mt-2">
          <v-btn
              class="grey white--text text-capitalize caption px-6"
              tile
              @click="back"
          >Back</v-btn>
          <v-btn
              class="grey white--text text-capitalize caption px-6"
              tile
          >Save</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</v-col>
</template>

<script>
  export default {
    data () {
      return {
        status:['New Student']
      }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
      back(){
        this.$router.push('/admin/students/enrollment-records')
      }
    }
  }
</script>

<style>

</style>