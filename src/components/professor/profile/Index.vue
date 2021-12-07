<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline tbl-title">Profile</span>
        <div>
          <!-- {{professorInfo}} -->
        </div>
    </div>
  </v-card>
</template>

<script>
import {get} from 'lodash'
export default {
    data(){
        return {
            get,
            selected:[],
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
            { text: 'ID number', value: 'id_number', sortable: true },
            { text: 'Fullname', value: 'full_name', sortable: true },
            { text: 'Address', value: 'address', sortable: true },
            { text: 'Gender', value: 'gender', sortable: true },
            { text: 'Civil Status', value: 'civil_status', sortable: true },
            { text: 'Specialization', value: 'specialization', sortable: true },
            { text: 'Email Address', value: 'email', sortable: true }
            ],
        }
    },
    computed:{
      professorInfo(){
        return this.$store.getters['professorSubjects/getProfessorInfo']
      },
    },
    mounted(){
    },
    methods:{
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