<template>
<v-row>
    <v-col cols="8" offset="2">
        <v-card class="pa-4" tile>
            <div class="d-flex mb-4">
                <v-icon color="" @click="back" class="mr-2">
                    mdi-arrow-left
                </v-icon>
                <div class="headline grey--text text--darken-1">
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
                ></v-text-field>
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
export default {
    data:()=>({
        roleSelected: 'Student',
        roles: [
            'Student',
            'Instructor',
            'Administrator'
        ],
        account_name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }),
    methods:{
      back(){
        this.$router.push('/admin/manage-users')
      },
      createUser(){
        if(this.password === this.confirmPassword){
            this.$store.dispatch('adminUsers/createUser', {
                role: this.roleSelected,
                account_name: this.account_name,
                email: this.email,
                password: this.password
            }).then(res=>{
                console.log(res)
                if(res.response){
                    console.log(res.message)
                    this.account_name = ''
                    this.email = ''
                    this.password = ''
                    this.confirmPassword = ''
                    this.roleSelected = 'Student'
                }
            })
        }else{
            console.log('password does not match!')
        }
      }
    }
}
</script>

<style>

</style>