<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline tbl-title">List of User</span>
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
            @change="searchUsers"
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
            @input="searchUsers_debounce"
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="get(users,'data')"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        item-key="_id"
        hide-default-footer
        v-model="selected"
        show-select
        :single-select="false"
    >
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
    <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ get(users,'count') }} entries</span>
    </div>
    <v-pagination
        v-model="page"
        :length="Math.ceil(get(users,'count')/entryValue)"
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
import {debounce, get} from 'lodash'

  export default {
    data () {
      return {
        get,
        selected:[],
        page: 1,
        entryOptions:[5,10,20,50,100],
        entryValue: 10,
        headers: [
          { text: 'Account Name', value: 'account_name', sortable: true },
          { text: 'Username', value: 'email', sortable: true },
          { text: 'Type', value: 'role', sortable: true }
        ],
        searchString: '',
        debounce_: debounce(()=>{
            this.page = 1
            this.$store.dispatch('adminUsers/getUsers', { 
                searchString: this.searchString, 
                limit: this.entryValue,
                skip: ((this.page-1) * this.entryValue)
            })}, 300)
      }
    },
    computed:{
        users(){
            return this.$store.getters['adminUsers/getUsers']
        }
    },
    mounted(){
        this.searchUsers()
    },
    methods:{
        searchUsers_debounce(){
            this.debounce_()
        },
        searchUsers(){
            this.page = 1
            this.paginate()
        },
        paginate(){
            this.$store.dispatch('adminUsers/getUsers', { 
                searchString: this.searchString, 
                limit: this.entryValue,
                skip: ((this.page-1) * this.entryValue)
            })
        },
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < get(this.users, 'count') ? ((this.page)*(this.entryValue)) : get(this.users, 'count')
        },
        getFirstnumEntryCount(val){
            return get(this.users, 'count')===0?0:val
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
  .tbl-title{
    font-size: 18px !important;
  }
}
</style>