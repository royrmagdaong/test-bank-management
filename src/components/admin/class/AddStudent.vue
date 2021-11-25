<template>
<v-col cols="12" sm="8" offset-sm="2">
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
          mdi-arrow-left
      </v-icon>
      <div class="headline grey--text text--darken-1 form-title">
          Add Student
      </div>
    </div>
    
    <div class="mt-10">
      <v-row no-gutters>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Student ID:</div>
          <v-select
            outlined
            hide-details
            dense
            class="my-input"
            color="grey"
            item-text="student_info"
            item-value="_id"
            :items="get(students, 'data')"
            v-model="selectedStudent"
            @click="()=>{getStudents(); page=1; searchString='';}"
            multiple
          >
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index === 0">
                <span>{{ `${item.student_id} - ${item.last_name}, ${item.first_name}` }}</span>
              </v-chip>
              <span
                v-if="index === 1"
                class="grey--text text-caption"
              >
                (+{{ selectedStudent.length - 1 }} others)
              </span>
            </template>
            <template v-slot:prepend-item>
              <div class="d-flex align-center px-2">
                <v-text-field 
                  dense 
                  hide-details
                  outlined
                  label="Search"
                  color="grey lighten-1"
                  v-model="searchString"
                  @input="getStudents"
                ></v-text-field>
              </div>
            </template>
            <template v-slot:append-item>
              <div class="d-flex justify-end">
                <v-pagination
                  v-model="page"
                  :length="Math.ceil(get(students,'count')/10)"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                  class="custom-pagination-1"
                  color="grey lighten-1"
                  @input="paginateStudents"
                ></v-pagination>
              </div>
            </template>
          </v-select>
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
              @click="addStudent"
          >Add</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</v-col>
</template>

<script>
import {get,debounce} from 'lodash'
  export default {
    data () {
      return {
        get,
        studentID: '',
        page: 1,
        entryValue: 10,
        searchString: '',
        selectedStudent: '',
        searchStudents: debounce(()=>{
          this.$store.dispatch('adminClass/getStudentsByID', {
            searchString: this.searchString,
            limit: this.entryValue,
            skip: ((this.page-1) * this.entryValue)
          })
        }, 300)
      }
    },
    computed:{
      students(){
        return this.$store.getters['adminClass/getStudents']
      },
      classId(){
        return this.$store.getters['adminClass/getSelectedClassID']
      }
    },
    mounted(){
      this.getStudents()
      if(!this.classId){
        this.$router.push('/admin/class')
      }
    },
    methods:{
      back(){
        this.$router.push('/admin/class/students')
      },
      getStudents(){
        this.searchStudents()
      },
      paginateStudents(){
        this.searchStudents()
      },
      addStudent(){
        if(this.selectedStudent){
          this.$store.dispatch('adminClass/addStudent',{
            class_id: this.classId,
            student_id: this.selectedStudent
          }).then(res=>{
            if(res.response){
              this.selectedStudent = ''
            }else{
              console.log(res.message)
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