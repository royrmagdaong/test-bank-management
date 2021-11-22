<template>
  <div class="app-bar white py-2" :class="{'app-bar-active': appbarActive}" >
    <div class="d-flex justify-space-between align-center">
      <div class="d-flex align-center" @click="showCarousel">
        <v-img src="/logo.png" class="logo"></v-img>
        <span class="ptc ml-3 ml-sm-5 title success--text text--darken-2 contacts" >Pateros Technological College</span>
      </div>
      <div class="d-none d-md-flex align-center body-1 font-weight-bold ">
        <div class="contacts mr-1">Contacts</div>
        <div class="appbar-item btn-pill px-4 py-2 white--text mx-3" @click="showLogin">Login</div>
        <div class="appbar-item btn-pill px-4 py-2 white--text" @click="showSignUp">Sign Up</div>
      </div>
      <div class="d-flex d-md-none">
        <v-app-bar-nav-icon large @click="appbarActive = !appbarActive"></v-app-bar-nav-icon>
      </div>
    </div>
    <div class="nav-item">
      <div @click="showLogin">Login</div>
      <div @click="showSignUp">Sign Up</div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    appbarActive:false
  }),
  methods:{
    showSignUp(){
      this.appbarActive = false
      this.$store.dispatch('home/setHome', {
        carouse: false,
        signUp: true,
        login: false
      })
    },
    showLogin(){
      this.appbarActive = false
      this.$store.dispatch('home/setHome', {
        carouse: false,
        signUp: false,
        login: true
      })
    },
    showCarousel(){
      this.appbarActive = false
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
.logo{
  width:55px; height: 55px;
}
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
.app-bar{
  position: fixed;
  z-index: 3;
  width: 100%;
  padding-left: 48px;
  padding-right: 48px;
  height: 71px;
  transition: height 400ms;
  overflow: hidden;
}
.app-bar-active{
  height: 195px;
}
.nav-item{
  margin-top: 12px;
  margin-bottom: 12px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.nav-item div{
  padding-top:12px;
  padding-bottom:12px;
  padding-left:22px;
  padding-right:22px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}
.nav-item div:hover{
  background-color: #00791E;
  border-radius: 100px;
  color: white;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .app-bar{
    padding-left: 14px;
    padding-right: 14px;
  }
  .ptc{
    font-size: 14px !important;
  }
}
</style>