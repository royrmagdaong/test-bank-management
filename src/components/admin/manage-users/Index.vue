<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline">List of User</span>
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
        :items="users"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        item-key="index"
        hide-default-footer
        v-model="selected"
        show-select
        :single-select="false"
    >
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
    <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing 1 to {{entryValue}} of 36 entries</span>
    </div>
    <v-pagination
        v-model="page"
        :length="Math.ceil(users.length/entryValue)"
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
            @click="$router.push('manage-users/create-user')"
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
    data () {
      return {
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
          { text: 'Account Name', value: 'account_nane', sortable: true },
          { text: 'Username', value: 'email', sortable: true },
          { text: 'Type', value: 'role', sortable: true }
        ],
        users: [
            {
                index: 1,
                account_nane: 'Janno Palacios',
                email: 'janobe@gmail.com',
                role: 'Administrator'
            },
            {
                index: 2,
                account_nane: 'Joken Villanueva',
                email: 'joken@gmail.com',
                role: 'Administrator'
            },
            {
                index: 3,
                account_nane: 'Erick Jason Batuto',
                email: 'batuto@gmail.com',
                role: 'Administrator'
            },
            {
                index: 4,
                account_nane: 'Hatch Villanueva',
                email: 'hatch@gmail.com',
                role: 'Registrar'
            },
            {
                index: 5,
                account_nane: 'Allan',
                email: 'allan@gmail.com',
                role: 'Teacher'
            },
            {
                index: 6,
                account_nane: 'John',
                email: 'john@gmail.com',
                role: 'Student'
            }
        ]
      }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
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