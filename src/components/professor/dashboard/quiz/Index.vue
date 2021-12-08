<template>
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
        mdi-arrow-left
      </v-icon>
      <span class="headline tbl-title">List of Quizzes</span>
    </div>

    <div class="mt-4 mb-2 d-flex justify-space-between align-center">
      <div class=" d-flex align-center">
        <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
        <v-combobox
          style="max-width:120px !important;"
          outlined
          dense
          hide-details
          color="grey lighten-1"
          v-model="entryValue"
          :items="entryOptions"
        ></v-combobox>
      </div>
      <div class="d-flex align-center">
        <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Search: </span>
        <v-text-field 
          dense 
          hide-details
          outlined
          color="grey lighten-1"
          v-model="searchString"
        ></v-text-field>
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="quizzes"
      :items-per-page="entryValue"
      class="elevation-0"
      hide-default-footer
    >
      <template v-slot:[`item.totalQuestions`]="{ item }">
        <div>
          {{ get(item,'questions').length }}
        </div>
      </template>
      <template v-slot:[`item.created_at`]="{ item }">
        <div>
          {{ formatDate(get(item,'created_at')) }}
        </div>
      </template>
      <template v-slot:[`item.class_list`]="{  }">
        <span class="blue--text text--lighten-2 view-list" @click="listDialog = true">
          View
        </span>
      </template>
      <template v-slot:[`item.start`]="{  }">
        <span class="blue--text text--lighten-2 view-list">
          Set
        </span>
      </template>
      <template v-slot:[`item.assign`]="{ item }">
        <span class="blue--text text--lighten-2 assign-to" @click="assignTo(item)">
          Assign to
        </span>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-hover v-slot="{ hover }">
          <v-icon small color="blue lighten-2" class="pa-1" :class="{'edit-active':hover}" @click="editQuiz(item)">mdi-pencil</v-icon>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-icon small color="red lighten-1" class="pa-1" :class="{'delete-active':hover}" @click="openDeleteModal(item)">mdi-delete</v-icon>
        </v-hover>
      </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
      <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing 0 to 0 of 0 entries</span>
      </div>
      <v-pagination
        v-model="page"
        :length="1"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class=""
        color="grey lighten-1"
      ></v-pagination>
    </div>
    <div>
      <v-btn
        class="grey white--text text-capitalize caption"
        tile
        @click="$router.push('quiz/create')"
      >New</v-btn>
    </div>

    <v-dialog
      v-model="deleteDialog"
      width="500"
    >
      <v-card class="pt-6 px-4 pb-2">
        <div >Are you sure you want to delete <b>{{ get(delete_quiz,'quizName') }}?</b></div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="deleteDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red"
            class="white--text"
            @click="deleteQuiz"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="assignDialog"
      width="400"
    >
      <v-card class="py-4 px-6">
        <div class="pb-2">Assign to:</div>
        <v-select
          outlined
          hide-details
          label="Class"
          return-object
          dense
          color="grey"
          item-text="class_section"
          :items="classes"
          v-model="selectedClass"
        >
          <template v-slot:[`item.class_code`]="{ item }">
            <div>
              {{item}}
            </div>
          </template>
        </v-select>
        <div class="d-flex justify-end">
          <v-btn
            color="primary"
            class="black--text mt-2"
            @click="assign"
          >Assign</v-btn>
        </div>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="listDialog"
      width="400"
    >
      <v-card class="py-4 px-6">
        <div>Class List</div>
        <ul>
          <li v-for="i in 3" :key="i">Class A</li>
        </ul>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>
import {get} from 'lodash'
import moment from 'moment'
export default {
  data(){
    return {
      get,
      page: 1,
      entryValue: 10,
      entryOptions: [5,10,20,50,100],
      searchString: '',
      assignDialog: false,
      listDialog: false,
      headers: [
        { text: 'Name', value: 'quizName', sortable: true },
        { text: 'No. of questions', value: 'totalQuestions', sortable: true },
        { text: 'Date Created', value: 'created_at', sortable: true },
        { text: 'Class List', value: 'class_list', sortable: false },
        { text: 'Assign', value: 'assign', sortable: false },
        { text: 'Set time to start', value: 'start', sortable: false },
        { text: 'Action', value: 'action', sortable: false }
      ],
      deleteDialog: '',
      delete_quiz: {},
      selectedClass:null,
      quiz_id: null
    }
  },
  computed:{
    quizzes(){
      return this.$store.getters['professorQuiz/getQuizzes']
    },
    classes(){
      return this.$store.getters['professorClass/getClass']
    }
  },
  mounted(){
    this.getQuizzes()
    this.getClass()
  },
  methods:{
    back(){
      this.$router.push('/professor/dashboard')
    },
    formatDate(date){
      if(date){
        return moment(date).format('MMM DD, YYYY')
      }
      return '-'
    },
    getClass(){
      this.$store.dispatch('professorClass/getClassByProf').then(res=>{
        console.log(res.data)
      })
    },
    getQuizzes(){
      this.$store.dispatch('professorQuiz/getProfQuizzes')
    },
    editQuiz(item){
      this.$router.push(`/professor/dashboard/quiz/edit/${item._id}`)
    },
    deleteQuiz(){
      this.$store.dispatch('professorQuiz/deleteQuiz',{id:this.delete_quiz._id}).then(res=>{
        if(res.response){
          this.getQuizzes()
          this.deleteDialog = false
        }
      })
    },
    openDeleteModal(item){
      this.delete_quiz = item
      this.deleteDialog = true
    },
    assign(){
      if(this.selectedClass){
        this.$store.dispatch('professorQuiz/assignQuizToClass', {
          quiz_id: this.quiz_id,
          class_id: this.selectedClass._id
        }).then(res=>{
          console.log(res)
          // clear
          this.quiz_id = null
          this.selectedClass = null
          this.assignDialog = false
        })
      }
    },
    assignTo(item){
      this.assignDialog = true
      this.quiz_id = item._id
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
.edit-active{
  cursor: pointer;
  background: rgb(204, 204, 226);
  border-radius: 10%;
}
.delete-active{
  cursor: pointer;
  background: rgb(233, 186, 189);
  border-radius: 10%;
}
.view-list:hover, .assign-to:hover{
  text-decoration: underline;
  cursor: pointer;
}

</style>