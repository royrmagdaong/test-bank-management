<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline">List of Student</span>
    </div>
    <div class="mt-4 d-flex justify-space-between align-center">
        <div class=" d-flex align-center mb-4">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
            <v-combobox
            style="max-width:120px !important;"
            :items="entryOptions"
            v-model="entryValue"
            outlined
            dense
            hide-details
            color="grey lighten-1"
            @change="getStudent"
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
            @input="getStudent"
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="get(students, 'data')"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        item-key="student_id"
        hide-default-footer
        v-model="selected"
        show-select
        :single-select="false"
    >
        <template v-slot:[`item.age`]="{ item }">
            <div class="">
                {{ getAge(item.birth_day) }}
            </div>
        </template>
        <template v-slot:[`item.birth_day`]="{ item }">
            <div class="">
                {{ formatDate(item.birth_day) }}
            </div>
        </template>
        <template v-slot:[`item.view`]="{ item }">
            <div class="view-student" @click="view(item)">
                View
            </div>
        </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
    <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing {{ ((page-1)*entryValue)+1 }} to {{ getEntryCount() }} of {{ get(students,'count') }} entries</span>
    </div>
    <v-pagination
        v-model="page"
        :length="Math.ceil(get(students,'count')/entryValue)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class=""
        color="grey lighten-1"
        @input="paginate"
    ></v-pagination>
    </div>
    <div>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
            @click="$router.push('students/enrollment-records')"
        >New</v-btn>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
        >Delete Selected</v-btn>
    </div>
  </v-card>
</template>

<script>
import moment from 'moment'
import {debounce, get} from 'lodash'
  export default {
    data () {
      return {
        get,
        moment,
        selected:[],
        page: 1,
        entryOptions:[5,10,20,50,100],
        entryValue: 10,
        headers: [
          {
            text: 'No.',
            align: 'left',
            sortable: true,
            value: 'index',
          },
          { text: 'ID#', value: 'student_id', sortable: true },
          { text: 'Fullname', value: 'full_name', sortable: true },
          { text: 'Sex', value: 'gender', sortable: true },
          { text: 'Age', value: 'age', sortable: true },
          { text: 'Birth Date', value: 'birth_day', sortable: true },
          { text: 'Email Address', value: 'email', sortable: true },
          { text: 'Options', value: 'view' },
        ],
        searchString:'',
        searchStudent: debounce(()=>{
          this.$store.dispatch('adminStudents/getStudents', {
            searchString: this.searchString,
            limit: this.entryValue,
            skip: ((this.page-1) * this.entryValue)
          })
        }, 300)
      }
    },
    computed:{
      students(){
        return this.$store.getters['adminStudents/getStudents']
      }
    },
    mounted(){
      this.getStudent()
    },
    methods:{
      formatDate(date){
        if(date){
          return moment(date).format('MMM DD, YYYY')
        }
        return '-'
      },
      getAge(bday){
        if(bday){
          return moment().diff(bday, 'years')
        }
        return '-'
      },
      view(student){
          this.$store.dispatch('adminViewStudent/setStudent', student)
          this.$router.push('students/view-student')
      },
      getStudent(){
        this.page = 1
        this.searchStudent()
      },
      paginate(){
        this.searchStudent()
      },
      getEntryCount(){
        return ((this.page)*(this.entryValue)) < get(this.students, 'count') ? ((this.page)*(this.entryValue)) : get(this.students, 'count')
      }
        
    }
  }
</script>

<style scoped>
.view-student{
    color:rgb(245, 122, 122);
}
.view-student:hover{
    cursor: pointer;
    text-decoration: underline;
}
</style>