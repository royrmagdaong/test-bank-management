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
          <div class="grey--text">First name:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            v-model="first_name"
          ></v-text-field>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Middle name:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            v-model="middle_name"
          ></v-text-field>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Last name:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            v-model="last_name"
          ></v-text-field>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Status:</div>
          <v-combobox
            class="my-input"
            color="grey"
            :items="statusOpt"
            outlined
            dense
            hide-details
            v-model="status"
          ></v-combobox>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Year Level</div>
          <v-combobox
            class="my-input"
            color="grey"
            :items="year_level_opt"
            outlined
            dense
            hide-details
            v-model="year_level"
          ></v-combobox>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Section:</div>
          <v-combobox
            class="my-input"
            color="grey"
            :items="section_opt"
            outlined
            dense
            hide-details
            v-model="section"
          ></v-combobox>
        </v-col>
        <v-col cols="8" offset="2" class="pb-2">
          <div class="grey--text">Academic Year:</div>
          <v-combobox
            class="my-input"
            color="grey"
            :items="academic_year_opt"
            outlined
            dense
            hide-details
            v-model="academic_year"
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
              @click="createStudent"
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
        statusOpt:['New Student'],
        first_name: '',
        middle_name: '',
        last_name: '',
        section: '',
        year_level: '',
        status: 'New Student',
        academic_year: '',
        section_opt: ['A','B','C'],
        year_level_opt: ['Grade 11', 'Grade 12'],
        academic_year_opt: ['2020-2021', '2021-2022'],
      }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
      back(){
        this.$router.push('/admin/students/enrollment-records')
      },
      createStudent(){
        if(
          this.first_name &&
          this.middle_name &&
          this.last_name &&
          this.status &&
          this.year_level &&
          this.section &&
          this.academic_year
        ){
          this.$store.dispatch('adminStudents/createStudent',{
            first_name: this.first_name,
            middle_name: this.middle_name,
            last_name: this.last_name,
            status: this.status,
            year_level: this.year_level,
            section: this.section,
            academic_year: this.academic_year
          }).then(res=>{
            if(res.response){
              console.log(res)
              this.first_name = ''
              this.middle_name = ''
              this.last_name = ''
              this.status = 'New Student'
              this.year_level = ''
              this.section = ''
              this.academic_year = ''
            }else{
              console.log(res)
            }
          }).catch(err=>{
            console.log(err.message)
          })
        }else{
          console.log('Please fill up all fields!')
        }
      }
    }
  }
</script>

<style>

</style>