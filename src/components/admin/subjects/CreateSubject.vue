<template>
<v-col cols="12" sm="8" offset-sm="2">
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
          mdi-arrow-left
      </v-icon>
      <div class="headline grey--text text--darken-1 form-title">
          Create Subject
      </div>
    </div>
    
    <div class="mt-10">
      <v-row no-gutters>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Code:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            v-model="code"
          ></v-text-field>
        </v-col>
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
          <v-combobox
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
            v-model="grade_level"
            :items="grade_level_opt"
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
              @click="createSubject"
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
        code: '',
        description: '',
        grade_level: 'Grade 11',
        grade_level_opt: ['Grade 11', 'Grade 12']
      }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
      back(){
        this.$router.push('/admin/subjects')
      },
      createSubject(){
        if(
          this.code &&
          this.description &&
          this.grade_level
        ){
          this.$store.dispatch('adminSubjects/createSubject',{
            code: this.code,
            description: this.description,
            grade_level: this.grade_level
          }).then(res=>{
            if(res.response){
              this.code = ''
              this.description = ''
              this.grade_level = ''
            }
          }).catch(error=>{
            console.log(error.message)
          })
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