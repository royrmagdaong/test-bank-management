<template>
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
        mdi-arrow-left
      </v-icon>
      <span class="headline tbl-title">List of Exams</span>
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
      :items="exams"
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
      <template v-slot:[`item.class_list`]="{ item }">
        <span class="blue--text text--lighten-2 view-list" @click="getAssignedClass(item)">
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
          <v-icon small color="blue lighten-2" class="pa-1" :class="{'edit-active':hover}" @click="editExam(item)">mdi-pencil</v-icon>
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
        :length="Math.ceil(exams.length/entryValue)"
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
        @click="$router.push('exam/create')"
      >New</v-btn>
    </div>

    <v-dialog
      v-model="deleteDialog"
      width="400"
    >
      <v-card class="py-4 px-6">
        <div class="ml-4 mt-3">Are you sure you want to delete <b>{{ get(delete_exam,'examName') }}?</b></div>
        
        <div class="d-flex justify-end mt-4">
          <v-btn
            color="red"
            class="white--text"
            @click="deleteExam"
          >
            Delete
          </v-btn>
        </div>
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
          item-disabled="disable"
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
            class="black--text mt-4"
            @click="assign"
          >Assign</v-btn>
        </div>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="listDialog"
      width="450"
    >
      <v-card class="py-4 px-6">
        <div class="title">Class List</div>
        <ul v-if="assigned_class.length>0">
          <li v-for="(_class,index) in assigned_class" :key="index" class="ml-4">
            <div class="d-flex align-center body-2">
              <div class="mr-2">{{get(_class, 'class_section')}}</div>
              <v-tooltip bottom color="warning">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon small v-bind="attrs" v-on="on" color="red lighten-2" class="unassign" @click="unAssign(get(_class,'_id'))">mdi-close</v-icon>
                </template>
                <span>Unassign</span>
              </v-tooltip>
            </div>
          </li>
        </ul>
        <div v-else class="ml-4 mt-1 grey--text text--darken-1">No available class for this quiz</div>
        <div class="d-flex justify-end">
          <v-btn
            class="black--text mt-4"
            @click="listDialog = false"
          >Close</v-btn>
        </div>
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
      deleteDialog: '',
      headers: [
        { text: 'Exam Name', value: 'examName', sortable: true },
        { text: 'Number of questions', value: 'totalQuestions', sortable: true },
        { text: 'Date Created', value: 'created_at', sortable: true },
        { text: 'Class List', value: 'class_list', sortable: false },
        { text: 'Assign', value: 'assign', sortable: false },
        { text: 'Set time to start', value: 'start', sortable: false },
        { text: 'Action', value: 'action', sortable: false }
      ],
      delete_exam: {},
      selectedClass: {},
      exam_id: null,
      assignDialog: false,
      listDialog: false,
      assigned_class: []
    }
  },
  computed:{
    exams(){
      return this.$store.getters['professorExam/getExams']
    },
    classes(){
      return this.$store.getters['professorExam/getProfClassExam']
    }
  },
  mounted(){
    this.getExams()
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
    getExams(){
      this.$store.dispatch('professorExam/getProfExams')
    },
    editExam(item){
      this.$router.push(`/professor/dashboard/exam/edit/${item._id}`)
    },
    deleteExam(){
      this.$store.dispatch('professorExam/deleteExam',{id:this.delete_exam._id}).then(res=>{
        if(res.response){
          this.getExams()
          this.deleteDialog = false
        }
      })
    },
    openDeleteModal(item){
      this.delete_exam = item
      this.deleteDialog = true
    },
    getClass(item){
      this.$store.dispatch('professorExam/getClassByProfExam',{exam_id: item._id})
    },
    assign(){
      if(this.selectedClass){
        this.$store.dispatch('professorExam/assignExamToClass', {
          exam_id: this.exam_id,
          class_id: this.selectedClass._id
        }).then(res=>{
          if(res.response){
            // clear
            this.exam_id = null
            this.selectedClass = null
            this.assignDialog = false
          }
        })
      }
    },
    assignTo(item){
      this.assignDialog = true
      this.exam_id = item._id
      this.getClass(item)
    },
    getAssignedClass(item){
      this.listDialog = true
      this.exam_id = item._id
      this.$store.dispatch('professorExam/getAllClassByExam',{
        exam_id: item._id
      }).then(res=>{
        if(res.response){
          this.assigned_class = res.data
        }
      })
    },
    unAssign(class_id){
      if(class_id && this.exam_id){
        this.$store.dispatch('professorExam/unAssignExamToClass', {
          exam_id: this.exam_id,
          class_id: class_id
        }).then(res=>{
          if(res.response){
            this.getAssignedClass({_id: this.exam_id})
          }
        })
      }
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
.unassign:hover{
  cursor: pointer;
}
</style>