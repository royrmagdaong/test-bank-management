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
      :items="[]"
      :items-per-page="entryValue"
      class="elevation-0"
      hide-default-footer
    >
      <!-- <template v-slot:[`item.full_name`]="{ item }">
          <div>
              {{ get(item,'studentInfo.first_name') }} {{ get(item,'studentInfo.last_name') }}
          </div>
      </template> -->
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
        @click="$router.push('exam/create')"
      >New</v-btn>
      <v-btn
        class="grey white--text text-capitalize caption"
        tile
      >Delete Selected</v-btn>
    </div>
  </v-card>
</template>

<script>

export default {
  data(){
    return {
      page: 1,
      entryValue: 1,
      entryOptions: [5,10,20,50,100],
      searchString: '',
      headers: [
        { text: 'Subject', value: 'subject', sortable: true },
        { text: 'Class', value: 'class_', sortable: true },
        { text: 'number of questions', value: 'questions', sortable: true },
        { text: 'Date Created', value: 'created_at', sortable: true }
      ],
    }
  },
  computed:{
  },
  mounted(){
  },
  methods:{
    back(){
      this.$router.push('/professor/dashboard')
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
</style>