<template>
  <div class="white px-12 py-2 d-flex justify-space-between align-center">
    <div class="d-flex align-center">
      <v-img src="/logo.png" style="width:55px; height: 55px;"></v-img>
      <span class="ml-5 title success--text text--darken-2 contacts" @click="showCarousel">Pateros Technological College</span>
    </div>
    <div class="d-flex align-center body-1 font-weight-bold">
      <div class="contacts mr-1">Contacts</div>
      <div class="appbar-item btn-pill px-4 py-2 white--text mx-3" @click="showLogin">Login</div>
      <div class="appbar-item btn-pill px-4 py-2 white--text" @click="showSignUp">Sign Up</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    showSignUp(){
      this.$store.dispatch('home/setHome', {
        carouse: false,
        signUp: true,
        login: false
      })
    },
    showLogin(){
      this.$store.dispatch('home/setHome', {
        carouse: false,
        signUp: false,
        login: true
      })
    },
    showCarousel(){
      this.$store.dispatch('home/setHome', {
        carousel: true,
        signUp: false,
        login: false
      })
    },
  }
}
</script>

<style scoped>
.btn-pill{
  border-radius: 100px;
}
.appbar-item{
  background-color: #00791E;
}
.appbar-item:hover{
  cursor: pointer;
  background-color: #1e1e1e !important;
}
.contacts:hover{
  cursor: pointer;
  color: #00791E;
}
</style>