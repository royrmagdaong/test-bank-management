<template>
  <v-row style="background: #363537; min-height:550px;" class="no-gutters">
    <v-col cols="12" md="6" class="d-flex flex-column justify-center p-0 mt-1 mt-md-0">
      <div class="bname text-center">Vision</div>
      <div class="lorem text-center px-md-12 px-8">Purus. Voluptatem exercitation urna expedita repellendus incididunt erat quaerat ut! Mollit odit facilisi, at ultricies laborum interdum nostra, quo atque nisl integer! Exercitation nullam. Phasellus? Natoque fugit faucibus expedita repudiandae. Debitis delectus eius. Parturient facere ante blandit, perspiciatis labore etiam, integer ullamco. Posuere distinctio, quasi, litora, pellentesque quaerat magnis eaque posuere minim tincidunt fringilla.</div>
    </v-col>
    <v-col cols="12" md="6" class="d-flex flex-column justify-center">
      <div class="bname text-center mission">Mission</div>
      <div class="lorem text-center px-md-12 px-8 mb-6 mb-md-0" style="border-left: 1px solid #fff;">Debitis delectus eius. Parturient facere ante blandit, perspiciatis labore etiam, integer ullamco. Posuere distinctio, quasi, litora, pellentesque quaerat magnis eaque posuere minim tincidunt fringilla. Bibendum penatibus dolorum mollit vitae adipisci. Hymenaeos pretium nostrum, exercitation dapibus. Veritatis laboriosam auctor, consectetur incidunt felis mollis exercitation rutrum numquam tempus at nostrud hendrerit, voluptatibus.</div>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
.bname{
    font-size: 34px;
    font-weight: 900;
    line-height: 70px;
    color: rgb(233, 223, 223);
    padding-top: 50px;
}
.lorem{
    line-height: 30px;
    color: rgb(233, 223, 223);
    padding-bottom: 60px;
} 
.mission{
  border-left: 1px solid #fff;
}
@media only screen and (max-width: 960px) {
  .bname{
    padding-top: 10px;
    font-size: 32px;
    border-left: 0 solid #fff !important;
  }
  .lorem{
    padding-bottom: 10px;
    border-left: 0 solid #fff !important;
  }
}
</style>