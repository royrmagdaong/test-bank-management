<template>
  <div>
    <div>
        <span class="headline">List of Subjects</span>
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
        :items="subjects"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        item-key="subject_code"
        hide-default-footer
        v-model="selected"
        show-select
        :single-select="false"
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
          { text: 'Subject', value: 'subject_code', sortable: true },
          { text: 'Description', value: 'description', sortable: true },
          { text: 'Grade level', value: 'grade_level', sortable: true },
        ],
        subjects: [
            {
                index: 1,
                subject_code: 'Caps1',
                description: 'Capstone 1',
                grade_level: 'Grade 11'
            },
            {
                index: 2,
                subject_code: 'engl101',
                description: 'English 1',
                grade_level: 'Grade 11'
            },
            {
                index: 3,
                subject_code: 'Alg101',
                description: 'Algebra 1',
                grade_level: 'Grade 11'
            }
        ]
    })
}
</script>

<style>

</style>