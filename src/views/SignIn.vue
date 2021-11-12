<template>
  <div>
    <v-container class="pa-0">
      <v-row no-gutters style="min-height:90vh;">
        <v-col cols="12" md="4" offset-md="4" class="d-flex align-center px-6">
          <v-card class="px-10 py-8" tile elevation="12" min-width="100%">
            <div class="headline text-center black--text">SIGN IN</div>
            <div class="mt-4">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field 
                  outlined 
                  dense 
                  label="Email" 
                  type="email"
                  v-model="email"
                  :rules="emailRules"
                  :error-messages="errPwMsg"
                  @focus="emptyErr"
                  required
                ></v-text-field>
                <v-text-field 
                  outlined 
                  dense 
                  label="Password" 
                  type="password"
                  v-model="password"
                  :rules="pwRules"
                  :error-messages="errPwMsg"
                  @focus="emptyErr"
                  required
                ></v-text-field>
                <v-row no-gutters>
                  <v-col cols="6" class="pl-0 pr-1">
                    <v-btn outlined block class="secondary " tile @click="reset">Clear</v-btn>
                  </v-col>
                  <v-col cols="6" class="pl-1 pr-0">
                    <v-btn outlined block class="primary " tile @click="login">Submit</v-btn>
                  </v-col>
                </v-row>
                <!-- <div class="mt-1">
                  <span class="caption">Click here to <a @click="routeTo('/register')">sign up</a></span>
                </div> -->
              </v-form>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default{
  data:()=>({
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    pwRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be 8 or more characters',
    ],
    errPwMsg: [],
    valid: true,
  }),
  methods:{
    routeTo(route){
      if(this.$route.path !== route){
          this.$router.push(route)
      }
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
      this.emptyErr()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    emptyErr(){
      this.errPwMsg = []
    },
    login(){
      if(this.$refs.form.validate()){
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
}
</script>

<style scoped>
</style>