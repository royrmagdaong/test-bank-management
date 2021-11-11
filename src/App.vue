<template>
  <v-app>
    
    <NavDrawer v-if="userInfo" />
    
    <v-main :class="{'nav-size': userInfo}" class="grey lighten-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from './components/NavDrawer.vue'
export default {
  name: 'App',

  components: {
    NavDrawer
  },

  data: () => ({
  }),
  computed:{
    userInfo(){
      return this.$store.getters['auth/getUserInfo']
    }
  }
};
</script>

<style>
.nav-size{
  margin-left: 256px;
}
tbody tr:nth-of-type(odd) {
  background-color: #F2F2F2;
}
</style>
