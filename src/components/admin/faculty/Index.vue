<template>
  <div>
    <div>
        <span class="headline">List of Faculty</span>
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
          { text: 'Fullname', value: 'full_name', sortable: true },
          { text: 'Address', value: 'address', sortable: true },
          { text: 'Gender', value: 'gender', sortable: true },
          { text: 'Civil Status', value: 'civil_status', sortable: true },
          { text: 'Specialization', value: 'specialization', sortable: true },
          { text: 'Email Address', value: 'email', sortable: true }
        ],
        subjects: [
            {
                index: 1,
                full_name: 'Professor 1',
                address: 'Pasig City',
                gender: 'M',
                civil_status: 'Single',
                specialization: 'Computer Etc.',
                email: 'professor1@gmail.com',
            },
            {
                index: 2,
                full_name: 'Professor 2',
                address: 'Pasig City',
                gender: 'M',
                civil_status: 'Single',
                specialization: 'Computer Etc.',
                email: 'professor2@gmail.com',
            },
            {
                index: 3,
                full_name: 'Professor 3',
                address: 'Pasig City',
                gender: 'M',
                civil_status: 'Single',
                specialization: 'Computer Etc.',
                email: 'professor3@gmail.com',
            },
        ]
    })
}
</script>

<style>

</style>