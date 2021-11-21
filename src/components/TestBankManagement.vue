<template>
  <div style="background: #FAE567;">
    <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2" class="d-flex flex-column justify-center" style="background: #FAE567; height:550px;">
        <div class="bname text-center">Test Bank</div>
        <div class="bname text-center">Management System</div>
        <div class="lorem text-center mx-12">Debitis delectus eius. Parturient facere ante blandit, perspiciatis labore etiam, integer ullamco. Posuere distinctio, quasi, litora, pellentesque quaerat magnis eaque posuere minim tincidunt fringilla. Bibendum penatibus dolorum mollit vitae adipisci.</div>
    </v-col>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bname{
    font-size: 64px;
    font-weight: 900;
    line-height: 70px;
}
.lorem{
    margin-top: 20px;
    line-height: 30px;
}
@media only screen and (max-width: 769px) {
  .bname {
    font-size: 52px;
  }
}
</style>