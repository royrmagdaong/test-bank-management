<template>
<v-card class="pa-4" tile>
  <div>
    <div class="d-flex">
        <v-icon color="" @click="back" class="mr-2">
            mdi-arrow-left
        </v-icon>
        <div class="headline grey--text text--darken-1">
            Enrolled Subjects
        </div>
    </div>

    <div>
        <div class="ml-2 body-2 my-8">
            <div>
                <span class="font-weight-bold grey--text text--darken-2">ID Number: </span>
                <span class="grey--text text--darken-1">200004577</span>
            </div>
            <div>
                <span class="font-weight-bold grey--text text--darken-2">Name: </span>
                <span class="grey--text text--darken-1">DA-ANOY, JESTERRAMY</span>
            </div>
            <div>
                <span class="font-weight-bold grey--text text--darken-2">Staus: </span>
                <span class="grey--text text--darken-1">New</span>
            </div>
            <div>
                <span class="font-weight-bold grey--text text--darken-2">AY: </span>
                <span class="grey--text text--darken-1">2020-2021</span>
            </div>
            <div>
                <span class="font-weight-bold grey--text text--darken-2">Yr/Section: </span>
                <span class="grey--text text--darken-1">Grade 11 A</span>
            </div>
        </div>

        <v-data-table
            :headers="headers"
            :items="subjects"
            :items-per-page="10"
            class="elevation-0"
            item-key="subject_code"
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

        <div class="mt-12">
            <v-btn
                class="grey white--text text-capitalize caption"
                tile
                @click="back"
            >Back</v-btn>
            <v-btn
                class="grey white--text text-capitalize caption"
                tile
            >Assign Subject</v-btn>
            <v-btn
                class="grey white--text text-capitalize caption"
                tile
            >Delete Selected</v-btn>
            <v-btn
                class="grey white--text text-capitalize caption"
                tile
            >Print</v-btn>
        </div>
    </div>
  </div>
</v-card>
</template>

<script>
export default {
    data:()=>({
        headers: [
          { text: 'Subject', value: 'subject_code' },
          { text: 'Description', value: 'description' },
          { text: 'Exam', value: 'exam' },
          { text: 'Quiz', value: 'quiz' },
          { text: 'Activity', value: 'activity' },
          { text: 'Remarks', value: 'remarks' }
        ],
        subjects:[
          {
            subject_code: 'Caps1',
            description: 'Capstone 1',
            exam: '0',
            quiz: '0',
            activity: '0',
            remarks: 'NONE'
          },
          {
            subject_code: 'MobDev1',
            description: 'Mobile Application Development 1',
            exam: '0',
            quiz: '0',
            activity: '0',
            remarks: 'NONE'
          },
          {
            subject_code: 'ROBT',
            description: 'Robotics',
            exam: '0',
            quiz: '0',
            activity: '0',
            remarks: 'NONE'
          }
        ],
        selected: [],
    }),
    methods:{
        back(){
            this.$router.push('/admin/students/enrollment-records')
        }
    }
}
</script>

<style>

</style>