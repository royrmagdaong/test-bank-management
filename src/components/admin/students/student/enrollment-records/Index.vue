<template>
<v-card class="pa-4" tile>
  <div class="mx-6">
    <div class="mb-6">
        <v-icon color="" @click="back">
            mdi-arrow-left
        </v-icon>
    </div>

     <v-data-table
        :headers="headers"
        :items="students"
        :items-per-page="10"
        class="elevation-0"
        item-key="student_id"
        search=""
        v-model="selected"
        show-select
        :single-select="false"
        hide-default-footer
    >
      <template v-slot:[`item.options`]="{ item }">
        <div class="view-student" @click="view(item)">
          Enrolled Subjects
        </div>
      </template>
    </v-data-table>

    <div class="mt-8 body-1 grey--text text--darken-1">Student Enrollment Records</div>
    <div class="mt-12">
      <v-btn
          class="grey white--text text-capitalize caption"
          tile
          @click="$router.push('enrollment-records/enroll-student')"
      >New</v-btn>
      <v-btn
          class="grey white--text text-capitalize caption"
          tile
      >Delete Selected</v-btn>
    </div>
  </div>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Grade and Section', value: 'grade_section' },
          { text: 'School Year', value: 'school_year' },
          { text: 'Status', value: 'status' },
          { text: 'Date Enrolled', value: 'date_enrolled' },
          { text: 'Options', value: 'options' }
        ],
        students:[
          {
            student_id: '1',
            grade_section: 'Grade 11',
            school_year: '2020-2021',
            status: 'New',
            date_enrolled: '2021-10-28'
          },
          {
            student_id: '2',
            grade_section: 'Grade 12',
            school_year: '2020-2021',
            status: 'New',
            date_enrolled: '2021-10-21'
          },
          {
            student_id: '3',
            grade_section: 'Grade 7',
            school_year: '2020-2021',
            status: 'New',
            date_enrolled: '2021-10-23'
          }
        ],
        selected: [],
      }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
        view(student){
            this.$store.dispatch('adminStudentEnrolledSubj/setStudent', student)
            this.$router.push('enrollment-records/enrolled-subjects')
        },
        back(){
            this.$router.push('/admin/students')
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