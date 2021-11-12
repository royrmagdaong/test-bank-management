<template>
  <v-row no-gutters>
      <v-col cols="7" class="red">
          <v-img src="/lizard.jpg" height="600px"></v-img>
      </v-col>
      <v-col cols="5" class="d-flex flex-column justify-center " style="background: #FAE567;">
          <v-col cols="8" offset="2" lg="6" offset-lg="3" class="pt-0 d-flex flex-column justify-center" >
              <div>
                <div class="font-weight-bold mb-6" style="font-size:40px;">Login</div>
                <v-text-field
                  placeholder="Username"
                  outlined
                  class="white mb-4"
                  color="grey"
                  hide-details
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  placeholder="Password"
                  outlined
                  class="white mb-4"
                  color="grey"
                  hide-details
                  v-model="password"
                  type="password"
                ></v-text-field>
                <v-btn
                  class="text-capitalize white--text"
                  x-large
                  color="black"
                  block
                  style="border-radius: 100px !important"
                  @click="login"
                >Submit</v-btn>
              </div>
          </v-col>
      </v-col>
  </v-row>
</template>

<script>
export default {
  data:()=>({
    email:'',
    password: ''
  }),
  methods:{
    login(){
      this.$store.dispatch('auth/signIn', {email:this.email, password:this.password}).then(res=>{
        if(res.response){
          this.$router.push(res.data.role)
        }else{
          this.errPwMsg.push(res.message)
        }
      })
    }
  }
}
</script>

<style>

</style>