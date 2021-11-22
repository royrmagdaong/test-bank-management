<template>
<v-container class="pa-4">
    <div class="ptc-banner d-flex flex-column align-center pa-2 pa-sm-4 mx-0 mx-md-8">
        <div class="ptc headline font-weight-bold text-center">PATEROS TECHNOLOGICAL COLLEGE</div>
        <div class="ptc-address body-1 font-weight-bold text-center">College St. Sto. Rosario Kanluran, Pateros, Metro Manila</div>
    </div>
</v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.ptc-banner{
  border: 2px solid #555;
}

@media only screen and (max-width: 480px) {
  .nav-size{
    margin-left: 0;
  }
  .ptc{
    font-size: 18px !important;
  }
  .ptc-address{
    font-size: 14px !important;
  }
}
</style>