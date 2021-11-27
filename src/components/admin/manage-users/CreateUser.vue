<template>
<v-row>
    <v-col cols="12" sm="8" offset-sm="2">
        <v-card class="pa-4" tile>
            <div class="d-flex mb-4">
                <v-icon color="" @click="back" class="mr-2">
                    mdi-arrow-left
                </v-icon>
                <div class="headline grey--text text--darken-1 form-title">
                    New User Account
                </div>
            </div>
            <v-col cols="10" offset="1" class="py-1">
                <div class="grey--text">Name:</div>
                <v-text-field
                    class="my-input"
                    placeholder="Account Name"
                    color="grey"
                    outlined
                    dense
                    hide-details
                    v-model="account_name"
                    v-if="roleSelected === 'Administrator'"
                ></v-text-field>
                <v-select
                    outlined
                    hide-details
                    dense
                    return-object
                    class="my-input"
                    color="grey"
                    item-text="id_and_name"
                    :items="get(students, 'data')"
                    v-model="selectedAccountName"
                    v-if="roleSelected === 'Student'"
                    @change="studentAccountName"
                    @click="searchString = ''"
                >
                    <template v-slot:prepend-item>
                        <div class="d-flex align-center px-2">
                            <v-text-field 
                                dense 
                                hide-details
                                outlined
                                label="Search"
                                color="grey lighten-1"
                                v-model="searchString"
                                @input="getStudent"
                            ></v-text-field>
                        </div>
                    </template>
                    <template v-slot:append-item>
                    <div class="d-flex justify-end">
                        <v-pagination
                            v-model="page"
                            :length="Math.ceil(get(students,'count')/entryValue)"
                            prev-icon="mdi-menu-left"
                            next-icon="mdi-menu-right"
                            class="custom-pagination-1"
                            color="grey lighten-1"
                            @input="paginate"
                        ></v-pagination>
                    </div>
                    </template>
                </v-select>
                <v-select
                    outlined
                    hide-details
                    dense
                    return-object
                    class="my-input"
                    color="grey"
                    item-text="id_and_name"
                    :items="get(professors, 'data')"
                    v-model="selectedAccountName"
                    v-if="roleSelected === 'Instructor'"
                    @change="studentAccountName"
                    @click="searchString = ''"
                >
                    <template v-slot:prepend-item>
                        <div class="d-flex align-center px-2">
                            <v-text-field 
                                dense 
                                hide-details
                                outlined
                                label="Search"
                                color="grey lighten-1"
                                v-model="searchString"
                                @input="getProfessors"
                            ></v-text-field>
                        </div>
                    </template>
                    <template v-slot:append-item>
                    <div class="d-flex justify-end">
                        <v-pagination
                            v-model="page"
                            :length="Math.ceil(get(professors,'count')/entryValue)"
                            prev-icon="mdi-menu-left"
                            next-icon="mdi-menu-right"
                            class="custom-pagination-1"
                            color="grey lighten-1"
                            @input="paginate2"
                        ></v-pagination>
                    </div>
                    </template>
                </v-select>
            </v-col>
            <v-col cols="10" offset="1" class="py-1">
                <div class="grey--text">Username:</div>
                <v-text-field
                    class="my-input"
                    placeholder="Email Address"
                    color="grey"
                    outlined
                    dense
                    hide-details
                    v-model="email"
                ></v-text-field>
            </v-col>
            <v-col cols="10" offset="1" class="py-1">
                <div class="grey--text">Password:</div>
                <v-text-field
                    class="my-input"
                    placeholder="Account Password"
                    color="grey"
                    outlined
                    dense
                    hide-details
                    v-model="password"
                    type="password"
                ></v-text-field>
            </v-col>
            <v-col cols="10" offset="1" class="py-1">
                <div class="grey--text">Confirm Password:</div>
                <v-text-field
                    class="my-input"
                    placeholder="Confirm Account Password"
                    color="grey"
                    outlined
                    dense
                    hide-details
                    v-model="confirmPassword"
                    type="password"
                ></v-text-field>
            </v-col>
            <v-col cols="10" offset="1" class="py-1">
                <div class="grey--text">Type:</div>
                <v-combobox
                    class="my-input"
                    color="grey"
                    :items="roles"
                    v-model="roleSelected"
                    outlined
                    dense
                    hide-details
                    @change="account_name = ''"
                ></v-combobox>
            </v-col>
            <v-col cols="10" offset="1" class="py-1">
                <v-btn
                    color="#F96332"
                    class="text-capitalize white--text body-2 px-6 mt-6"
                    @click="createUser"
                >Save</v-btn>
            </v-col>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
import {get, debounce} from 'lodash'
export default {
    data(){
        return{
            get,
            roleSelected: 'Student',
            roles: [
                'Student',
                'Instructor',
                'Administrator'
            ],
            entryOptions:[5,10,20,50,100],
            entryValue: 10,
            account_name: '',
            selectedAccountName: '',
            email: '',
            password: '',
            confirmPassword: '',
            page: 1,
            searchString:'',
            searchStudent: debounce(()=>{
                this.$store.dispatch('adminUsers/getStudentsWithoutUser', {
                    searchString: this.searchString,
                    limit: this.entryValue,
                    skip: ((this.page-1) * this.entryValue)
                })
            }, 300),
            searchProfessor: debounce(()=>{
                this.$store.dispatch('adminUsers/getProfessorsWithoutUser', {
                    searchString: this.searchString,
                    limit: this.entryValue,
                    skip: ((this.page-1) * this.entryValue)
                })
            }, 300)
        }
    },
    computed:{
        students(){
            return this.$store.getters['adminUsers/getStudents']
        },
        professors(){
            return this.$store.getters['adminUsers/getProfessors']
        }
    },
    mounted(){
      this.getStudent()
      this.getProfessors()
    },
    methods:{
      back(){
        this.$router.push('/admin/manage-users')
      },
      getStudent(){
        this.page = 1
        this.searchStudent()
      },
      getProfessors(){
        this.page = 1
        this.searchProfessor()
      },
      paginate(){
        this.searchStudent()
      },
      paginate2(){
        this.searchProfessor()
      },
      studentAccountName(){
        this.account_name = get(this.selectedAccountName, 'first_name') + ' ' + get(this.selectedAccountName, 'last_name')
        console.log(this.selectedAccountName)
      },
      createUser(){
        if(
            this.account_name === '' ||
            this.email === '' ||
            this.password === '' ||
            this.confirmPassword === ''
        ){
            console.log('please fill up all fields!')
        }else{
            if(this.password === this.confirmPassword){
                this.$store.dispatch('adminUsers/createUser', {
                    id: get(this.selectedAccountName, '_id'),
                    role: this.roleSelected,
                    account_name: this.account_name,
                    email: this.email,
                    password: this.password
                }).then(res=>{
                    if(res.response){
                        console.log(res.message)
                        this.account_name = ''
                        this.email = ''
                        this.password = ''
                        this.confirmPassword = ''
                        this.selectedAccountName = ''
                        this.getStudent()
                        this.getProfessors()
                    }else{
                        console.log(res.message)
                    }
                }).catch(error=>{
                    console.log(error.message)
                })
            }else{
                console.log('password does not match!')
            }
        }
      }
    }
}
</script>

<style scoped>
@media only screen and (max-width: 480px) {
  .form-title{
    font-size: 18px !important;
  }
}
</style>