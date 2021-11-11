<template>
  <div>
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
        :items="students"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        hide-default-footer
    >
        <template v-slot:[`item.view`]="{ item }">
            <div class="view-student" @click="view(item)">
                View
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
        :length="4"
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
            @click="$router.push('students/enrollment-records')"
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
    data () {
      return {
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
          { text: 'Age', value: 'protein', sortable: true },
          { text: 'Birth Date', value: 'birth_day', sortable: true },
          { text: 'Email Address', value: 'email', sortable: true },
          { text: 'Options', value: 'view' },
        ],
      }
    },
    computed:{
      students(){
        return this.$store.getters['adminStudents/getStudents']
      }
    },
    mounted(){
      this.$store.dispatch('adminStudents/getStudents')
    },
    methods:{
        view(student){
            this.$store.dispatch('adminViewStudent/setStudent', student)
            this.$router.push('students/view-student')
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