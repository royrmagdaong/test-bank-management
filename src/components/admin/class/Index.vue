<template>
  <div>
    <div>
        <span class="headline tbl-name">List of Class</span>
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
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="subjects"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        hide-default-footer
    >
        <template v-slot:[`item.students`]="{ item }">
            <div class="view-student" @click="view(item)">
                View List
            </div>
        </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
        <div class="font-weight-light grey--text text--darken-1 subtitle-2">
            <span>Showing 1 to {{entryValue}} of 36 entries</span>
        </div>
        <v-pagination
            v-model="page"
            :length="Math.ceil(subjects.length/entryValue)"
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
            @click="$router.push('class/create')"
        >New</v-btn>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
        >Delete Selected</v-btn>
    </div>
  </div>
</template>

<script>
export default {
    data:()=>({
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
          { text: 'Class code', value: 'class_code', sortable: true },
          { text: 'Instructor', value: 'instructor', sortable: true },
          { text: 'Days and Time', value: 'days_and_time', sortable: true },
          { text: 'Room', value: 'room', sortable: true },
          { text: 'Section', value: 'section', sortable: true },
          { text: 'Students', value: 'students' }
        ],
        subjects: [
            {
                index: 1,
                class_code: 'Spiral Filipino',
                instructor: 'Joken Villanueva',
                days_and_time: 'MWF / 7:30am-10:00am',
                room: 'Room 101',
                section: 'A'
            },
            {
                index: 2,
                class_code: 'Spiral English',
                instructor: 'Joken Villanueva',
                days_and_time: 'NONE / NONE',
                room: 'NONE',
                section: 'NONE'
            },
            {
                index: 3,
                class_code: 'Spiral Science',
                instructor: 'Joken Villanueva',
                days_and_time: 'NONE / NONE',
                room: 'NONE',
                section: 'NONE'
            }
        ]
    }),
    methods:{
        view(students){
            console.log(students)
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