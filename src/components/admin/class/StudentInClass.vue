<template>
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
          mdi-arrow-left
      </v-icon>
      <span class="headline tbl-name">List of Students in Class</span>
    </div>
        

      <div class="mt-4 mb-2 d-flex justify-space-between align-center">
        <div class=" d-flex align-center">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
            <v-combobox
            style="max-width:120px !important;"
            :items="entryOptions"
            v-model="entryValue"
            outlined
            dense
            hide-details
            color="grey lighten-1"
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
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="students"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        hide-default-footer
    >
        <template v-slot:[`item.full_name`]="{ item }">
            <div>
                {{get(item, 'last_name')}}, {{get(item, 'first_name')}}
            </div>
        </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
        <div class="font-weight-light grey--text text--darken-1 subtitle-2">
            <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ students.length }} entries</span>
        </div>
        <v-pagination
            v-model="page"
            :length="Math.ceil(students.length/entryValue)"
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
            @click="$router.push('add-student')"
        >Add</v-btn>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
        >Delete Selected</v-btn>
    </div>
  </v-card>
</template>

<script>
import {get,debounce} from 'lodash'
export default {
    data(){
        return{
            get,
            debounce,
            page: 1,
            entryOptions:[5,10,20,50,100],
            entryValue: 10,
            searchString: '',
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
              { text: 'Year Level', value: 'year_level', sortable: true },
              { text: 'Email Address', value: 'email', sortable: true },
            ],
            searchClass: debounce(()=>{
                this.$store.dispatch('adminClass/getClass', {
                    searchString: this.searchString,
                    limit: this.entryValue,
                    skip: ((this.page-1) * this.entryValue)
                })
            }, 300)
        }
    },
    computed:{
      classId(){
        return this.$store.getters['adminClass/getSelectedClassID']
      },
      students(){
        return this.$store.getters['adminClass/getClassStudents']
      }
    },
    mounted(){
      if(!this.classId){
        this.$router.push('/admin/class')
      }
    },
    methods:{
        view(students){
            console.log(students)
        },
        back(){
          this.$router.push('/admin/class')
        },
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < this.students.length ? ((this.page)*(this.entryValue)) : this.students.length
        },
        getFirstnumEntryCount(val){
            return this.students.length===0?0:val
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
@media only screen and (max-width: 480px) {
  .tbl-name{
    font-size: 18px !important;
  }
}
</style>