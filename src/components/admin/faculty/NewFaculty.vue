<template>
<v-col cols="12" sm="8" offset-sm="2">
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
          mdi-arrow-left
      </v-icon>
      <div class="headline grey--text text--darken-1 form-title">
          Add Faculty
      </div>
    </div>
    
    <div class="mt-10">
      <v-row no-gutters>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
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
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
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
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
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
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Email Address:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            v-model="email"
          ></v-text-field>
        </v-col>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Civil Status:</div>
          <v-combobox
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            :items="civil_status_opt"
            v-model="civil_status"
          ></v-combobox>
        </v-col>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Department:</div>
          <v-combobox
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            :items="departments_opt"
            v-model="department"
          ></v-combobox>
        </v-col>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2 mt-2">
          <v-btn
              class="grey white--text text-capitalize caption px-6"
              tile
              @click="back"
          >Back</v-btn>
          <v-btn
              class="grey white--text text-capitalize caption px-6"
              tile
              @click="createFaculty"
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
          departments_opt: ['IT Department', 'BSOA Department'],
          civil_status_opt: ['Single','Married','Widowed','Separated'],
          first_name: '',
          middle_name: '',
          last_name: '',
          email: '',
          civil_status: 'Single',
          department: 'IT Department'
      }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
      back(){
        this.$router.push('/admin/faculty')
      },
      createFaculty(){
        if(
            this.first_name &&
            this.middle_name &&
            this.last_name &&
            this.email &&
            this.civil_status &&
            this.department
        ){
            this.$store.dispatch('adminFaculty/createProf',{
                first_name: this.first_name,
                middle_name: this.middle_name,
                last_name: this.last_name,
                email: this.email,
                civil_status: this.civil_status,
                department: this.department
            }).then(res=>{
                if(res.response){
                    this.first_name = ''
                    this.middle_name = ''
                    this.last_name = ''
                    this.email = ''
                    this.civil_status = 'Single'
                    this.department = 'IT Department'
                }
            })
        }else{
            console.log('Please fill up all fields!')
        }
      }
    }
  }
</script>

<style scoped>
@media only screen and (max-width: 480px) {
  .form-title{
    font-size: 18px !important;
  }
}
</style>