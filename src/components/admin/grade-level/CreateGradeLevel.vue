<template>
<v-col cols="12" sm="8" offset-sm="2">
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
          mdi-arrow-left
      </v-icon>
      <div class="headline grey--text text--darken-1 form-title">
          New Grade level
      </div>
    </div>
    
    <div class="mt-10">
      <v-row no-gutters>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Description:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            v-model="description"
          ></v-text-field>
        </v-col>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Grade Level:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            v-model="grade_level"
          ></v-text-field>
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
              @click="createGradeLevel"
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
        description: '',
        grade_level: '',
      }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
      back(){
        this.$router.push('/admin/grade-level')
      },
      createGradeLevel(){
        if(this.description && this.grade_level){
          this.$store.dispatch('adminGradeLevel/createGradeLevel',{
            grade_level: this.grade_level,
            description: this.description
          }).then(res=>{
            if(res.response){
              this.grade_level = ''
              this.description = ''
            }else{
              console.log(res)
            }
          }).catch(error=>{
            console.log(error.message)
          })
        }else{
          console.log('Please fill up all fields')
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