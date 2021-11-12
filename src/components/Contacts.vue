<template>
  <v-row  style="background: #121212; height:650px;">
    <v-col cols="3" offset="1" offset-lg="2" class="d-flex justify-center align-center">
      <div>
        <div class="font-weight-bold mb-2">Address</div>
        <div class="mb-1">College Street, Sto. Rosario</div>
        <div class="mb-1">Kanluran 1620 Pateros</div>
        <div>MANILA</div>
        <div class="font-weight-bold mb-2 mt-12">Contacts</div>
        <div class="mb-1">Email: support@mobirise.com</div>
        <div class="mb-1">Phone: +1 (0) 000 0000 001</div>
        <div>Fax: +1 (0) 000 0000 0002</div>

        <div class="mb-6 mt-10">
          <v-icon large dark>mdi-twitter</v-icon>
          <v-icon large dark class="mx-4">mdi-facebook</v-icon>
          <v-icon large dark>mdi-instagram</v-icon>
        </div>
        <div class="copy-right">© Copyright 2021 Pateros Technological College</div>
      </div>
    </v-col>
    <v-col cols="6" class="d-flex align-center">
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