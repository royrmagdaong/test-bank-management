<template>
<v-card class="pa-4" tile>
  <v-row class="pa-2">
    <v-col cols="12" class="pa-2">
      <div class="d-flex align-center">
        <v-icon color="" @click="back">
          mdi-arrow-left
        </v-icon>
        <span class="grey--text lighten-1 headline ml-2">Student Details</span>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">ID Number*</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
          v-model="student.student_id"
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="8" class="pa-2"></v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Last Name*</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
          v-model="student.last_name"
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">First Name*</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
          v-model="student.first_name"
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Middle Name*</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
          v-model="student.middle_name"
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Gender</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
          v-model="student.gender"
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Birth Date</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
          v-model="student.birth_date"
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Birth place</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
          
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Civil Status</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Age</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Nationality</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Religion</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Contact</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="4" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Email*</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
          v-model="student.email"
        ></v-text-field>
      </div>
    </v-col>
    <v-col cols="8" class="pa-2">
      <div class="d-flex flex-column">
        <span class="grey--text lighten-2 body-2">Home Address</span>
        <v-text-field
          class="my-input"
          outlined
          dense
          hide-details
          disabled
        ></v-text-field>
      </div>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
import {get} from 'lodash'
  export default {
    data () {
      return {
        get
      }
    },
    computed:{
      student(){
        return this.$store.getters['adminViewStudent/getStudent']
      }
    },
    mounted(){
    },
    methods:{
      back(){
        this.$router.push('/admin/students')
      }
    }
  }
</script>

<style>
.my-input.v-input .v-input__slot {
  border-radius: 100px;
}
</style>