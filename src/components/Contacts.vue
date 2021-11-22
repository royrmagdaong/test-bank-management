<template>
  <v-row  style="background: #121212; min-height:650px;" class="no-gutters">
    <v-col cols="10" offset="1" sm="8" offset-sm="2" class="d-flex d-md-none align-center justify-center mt-10">
      <v-img
        max-height="380"
        src="/map.png"
      ></v-img>
    </v-col>
    <v-col sm="3" offset-sm="2" class="d-none d-md-flex justify-center align-center">
      <div class="d-block d-sm-flex d-md-block">
        <div>
          <div class="font-weight-bold mb-md-2">Address</div>
          <div class="mb-1">College Street, Sto. Rosario</div>
          <div class="mb-1">Kanluran 1620 Pateros</div>
          <div>MANILA</div>
        </div>
        <div>
          <div class="font-weight-bold mb-md-2 mt-md-12">Contacts</div>
          <div class="mb-1">Email: support@mobirise.com</div>
          <div class="mb-1">Phone: +1 (0) 000 0000 001</div>
          <div>Fax: +1 (0) 000 0000 0002</div>
        </div>
        <div class="mb-md-6 mt-md-10 text-sm-center text-md-start">
          <v-icon large dark>mdi-twitter</v-icon>
          <v-icon large dark class="mx-4">mdi-facebook</v-icon>
          <v-icon large dark>mdi-instagram</v-icon>
          <div class="copy-right mt-3">© Copyright 2021 Pateros Technological College</div>
        </div>
      </div>
    </v-col>
    <v-col cols="10" offset="1" sm="8" offset-sm="2" class="d-md-none d-block d-sm-flex justify-space-between">
      <div class="mt-4">
        <div class="font-weight-bold">Address</div>
        <div class="mb-1">College Street, Sto. Rosario</div>
        <div class="mb-1">Kanluran 1620 Pateros</div>
        <div>MANILA</div>
      </div>
      <div class="mt-4">
        <div class="font-weight-bold">Contacts</div>
        <div class="mb-1">Email: support@mobirise.com</div>
        <div class="mb-1">Phone: +1 (0) 000 0000 001</div>
        <div>Fax: +1 (0) 000 0000 0002</div>
      </div>
    </v-col>
    <v-col cols="10" offset="1" sm="8" offset-sm="2" class="d-md-none d-block mt-4">
      <div class="text-sm-center text-md-start mb-8">
        <v-icon large dark>mdi-twitter</v-icon>
        <v-icon large dark class="mx-4">mdi-facebook</v-icon>
        <v-icon large dark>mdi-instagram</v-icon>
        <div class="copy-right mt-3">© Copyright 2021 Pateros Technological College</div>
      </div>
    </v-col>
    <v-col cols="6" class="d-none d-md-flex align-center">
      <img src="/map.png" height="380px" />
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
  color: rgb(233, 223, 223);
}
.copy-right{
  font-size: 16px;
}

</style>