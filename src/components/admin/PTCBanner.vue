<template>
<v-container class="pa-0">

  <!-- for xs -->
    <div class="ptc-banner-2 success lighten-2 d-md-none d-flex">
      <div style="border-bottom: 1px solid #555; width:100%;" class="pa-2 d-flex justify-space-between align-center">
        <div class="flex-column align-center mx-0 d-flex">
          <div class="ptc headline font-weight-medium ml-2">PATEROS TECHNOLOGICAL COLLEGE</div>
        </div>
        <v-app-bar-nav-icon @click="setDrawer"></v-app-bar-nav-icon>
      </div>
    </div>
    <div class="ptc-banner-22 flex-column align-center mx-0 d-flex d-md-none grey lighten-2" style="opacity:0;">
      <div style="border: 2px solid #555; width:100%;" class="pa-2">
        <div class="ptc headline font-weight-bold text-center">PATEROS TECHNOLOGICAL COLLEGE</div>
      </div>
    </div>

    <!-- for sm and up -->
    <div class="ptc-banner d-none d-md-flex flex-column align-center ">
      <div style="border: 2px solid #555; width:100%;" class="pa-2">
        <div class="ptc headline font-weight-bold text-center">PATEROS TECHNOLOGICAL COLLEGE</div>
        <div class="ptc-address body-1 font-weight-bold text-center">College St. Sto. Rosario Kanluran, Pateros, Metro Manila</div>
      </div>
    </div>
    <div class="ptc-banner-sub d-none d-md-flex flex-column align-center " style="opacity:0;">
      <div style="border: 2px solid #555; width:100%;" class="pa-2">
        <div class="ptc headline font-weight-bold text-center">PATEROS TECHNOLOGICAL COLLEGE</div>
        <div class="ptc-address body-1 font-weight-bold text-center">College St. Sto. Rosario Kanluran, Pateros, Metro Manila</div>
      </div>
    </div>
</v-container>
</template>

<script>
export default {
  computed:{
    drawer(){
      return this.$store.getters['core/getDrawer']
    }
  },
  methods:{
    setDrawer(){
      this.$store.dispatch('core/setDrawer',!this.drawer)
    }
  }
}
</script>

<style scoped>
.ptc-banner{
  position: fixed;
  z-index: 3;
  width: -webkit-calc(100% - 256px);
  width:    -moz-calc(100% - 256px);
  width:         calc(100% - 256px);
}
.ptc-banner-sub{
  width: -webkit-calc(100% - 256px);
  width:    -moz-calc(100% - 256px);
  width:         calc(100% - 256px);
}
.ptc-banner-2{
  position: fixed;
  z-index: 3;
  width: 100%;
}
.ptc-banner-22{
  width: 100%;
}

@media only screen and (max-width: 959px) {
  .nav-size{
    margin-left: 0;
  }
  .ptc{
    font-size: 20px !important;
  }
}

@media only screen and (max-width: 480px) {
  .nav-size{
    margin-left: 0;
  }
  .ptc{
    font-size: 16px !important;
  }
  .ptc-address{
    font-size: 14px !important;
  }
}
</style>