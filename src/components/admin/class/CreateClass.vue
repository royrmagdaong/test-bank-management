<template>
<v-col cols="12" sm="8" offset-sm="2">
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
          mdi-arrow-left
      </v-icon>
      <div class="headline grey--text text--darken-1 form-title">
          New Class
      </div>
    </div>
    
    <div class="mt-10">
      <v-row no-gutters>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Class Code:</div>
          <v-select
            outlined
            hide-details
            dense
            class="my-input"
            color="grey"
            item-text="code_and_description"
            :items="get(subjects, 'data')"
            v-model="selectedSubject"
            @click="clearFields"
          >
            <template v-slot:prepend-item>
              <div class="d-flex align-center px-2">
                <v-text-field 
                  dense 
                  hide-details
                  outlined
                  label="Search"
                  color="grey lighten-1"
                  v-model="searchString"
                  @input="getSubjects"
                ></v-text-field>
              </div>
            </template>
            <template v-slot:append-item>
              <div class="d-flex justify-end">
                <v-pagination
                  v-model="page"
                  :length="Math.ceil(get(subjects,'count')/10)"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                  class="custom-pagination-1"
                  color="grey lighten-1"
                  @input="paginateSubj"
                ></v-pagination>
              </div>
            </template>
          </v-select>
        </v-col>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Instructor:</div>
          <v-select
            outlined
            hide-details
            dense
            class="my-input"
            color="grey"
            item-text="full_name"
            :items="get(professors, 'data')"
            v-model="selectedInstructor"
            @click="clearFields"
          >
            <template v-slot:prepend-item>
              <div class="d-flex align-center px-2">
                <v-text-field 
                  dense 
                  hide-details
                  outlined
                  label="Search"
                  color="grey lighten-1"
                  v-model="searchString"
                  @input="fetchProf"
                ></v-text-field>
              </div>
            </template>
            <template v-slot:append-item>
              <div class="d-flex justify-end">
                <v-pagination
                  v-model="page"
                  :length="Math.ceil(get(professors,'count')/10)"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                  class="custom-pagination-1"
                  color="grey lighten-1"
                  @input="paginateProf"
                ></v-pagination>
              </div>
            </template>
          </v-select>
        </v-col>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Days and time:</div>
          <v-text-field
            class="my-input"
            color="grey"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Room:</div>
          <v-select
            outlined
            hide-details
            dense
            class="my-input"
            color="grey"
            item-text="room"
            :items="get(rooms, 'data')"
            v-model="selectedRoom"
            @click="clearFields"
          >
            <template v-slot:prepend-item>
              <div class="d-flex align-center px-2">
                <v-text-field 
                  dense 
                  hide-details
                  outlined
                  label="Search"
                  color="grey lighten-1"
                  v-model="searchString"
                  @input="getRooms"
                ></v-text-field>
              </div>
            </template>
            <template v-slot:append-item>
              <div class="d-flex justify-end">
                <v-pagination
                  v-model="page"
                  :length="Math.ceil(get(rooms,'count')/10)"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                  class="custom-pagination-1"
                  color="grey lighten-1"
                  @input="paginateRoom"
                ></v-pagination>
              </div>
            </template>
          </v-select>
        </v-col>
        <v-col cols="10" offset="1" sm="8" offset-sm="2" class="pb-2">
          <div class="grey--text">Year/Section:</div>
          <v-select
            outlined
            hide-details
            dense
            class="my-input"
            color="grey"
            item-text="grade_and_section"
            :items="get(grade_level, 'data')"
            v-model="selectedGradeLevel"
            @click="clearFields"
          >
            <template v-slot:prepend-item>
              <div class="d-flex align-center px-2">
                <v-text-field 
                  dense 
                  hide-details
                  outlined
                  label="Search"
                  color="grey lighten-1"
                  v-model="searchString"
                  @input="getGradeLevel"
                ></v-text-field>
              </div>
            </template>
            <template v-slot:append-item>
              <div class="d-flex justify-end">
                <v-pagination
                  v-model="page"
                  :length="Math.ceil(get(grade_level,'count')/10)"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                  class="custom-pagination-1"
                  color="grey lighten-1"
                  @input="paginateGradeLevel"
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
          >Save</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</v-col>
</template>

<script>
import {get, debounce} from 'lodash'
  export default {
    data () {
      return {
        get,
        description: '',
        searchString: '',
        page: 1,
        selectedInstructor: '',
        selectedSubject: '',
        selectedGradeLevel: '',
        selectedRoom: '',

        // api call debounce
        searchProf: debounce(()=>{
          this.$store.dispatch('adminFaculty/fetchProf', {
            searchString: this.searchString,
            limit: 10,
            skip: ((this.page-1) * 10)
          })
        }, 300),
        searchSubjects: debounce(()=>{
          this.$store.dispatch('adminSubjects/getSubjects', {
            searchString: this.searchString,
            limit: 10,
            skip: ((this.page-1) * 10)
          })
        }, 300),
        searchGradeLevel: debounce(()=>{
          this.$store.dispatch('adminGradeLevel/getGradeLevel', {
            searchString: this.searchString,
            limit: 10,
            skip: ((this.page-1) * 10)
          })
        }, 300),
        searchRoom: debounce(()=>{
          this.$store.dispatch('adminRoom/getRooms', {
            searchString: this.searchString,
            limit: 10,
            skip: ((this.page-1) * 10)
          })
        }, 300)
      }
    },
    computed:{
      professors(){
        return this.$store.getters['adminFaculty/getProfessor']
      },
      subjects(){
        return this.$store.getters['adminSubjects/getSubjects']
      },
      grade_level(){
        return this.$store.getters['adminGradeLevel/getGradeLevel']
      },
      rooms(){
        return this.$store.getters['adminRoom/getRooms']
      }
    },
    mounted(){
      this.clearFields()
    },
    methods:{
      back(){
        this.$router.push('/admin/class')
      },
      fetchProf(){
        this.page = 1
        this.searchProf()
      },
      paginateProf(){
        this.searchProf()
      },
      getSubjects(){
        this.page = 1
        this.searchSubjects()
      },
      paginateSubj(){
        this.searchSubjects()
      },
      getGradeLevel(){
        this.page = 1;
        this.searchGradeLevel()
      },
      paginateGradeLevel(){
        this.searchGradeLevel()
      },
      getRooms(){
        this.page = 1
        this.searchRoom()
      },
      paginateRoom(){
        this.searchRoom()
      },
      clearFields(){
        this.page = 1
        this.searchString = ''
        this.fetchProf()
        this.getSubjects()
        this.getGradeLevel()
        this.getRooms()
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

<style>
.custom-pagination-1 .v-pagination__navigation {
  height: 26px !important;
  width: 26px !important;
}
.custom-pagination-1 .v-pagination__navigation .v-icon {
  font-size: 16px !important;
}

.custom-pagination-1 .v-pagination__item {
  height: 26px !important;
  min-width: 26px !important;
  font-size: 0.85rem !important;
}
</style>