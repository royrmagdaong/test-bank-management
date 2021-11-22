<template>
  <v-row no-gutters>
      <v-col cols="12" sm="7" class="red d-none d-sm-block">
          <v-img src="/library.jpg" height="600px"></v-img>
      </v-col>
      <v-col cols="12" sm="5" class="d-flex flex-column justify-center py-12 py-sm-0" style="background: #C2D3FA;">
          <v-col cols="8" offset="2" lg="6" offset-lg="3" class="pt-0">
              <div class="font-weight-bold mb-6" style="font-size:40px;">Sign up</div>
              <v-text-field
                placeholder="Username"
                outlined
                class="white mb-4"
                color="grey"
                hide-details
              ></v-text-field>
              <v-text-field
                placeholder="Password"
                outlined
                class="white mb-4"
                color="grey"
                hide-details
              ></v-text-field>
              <v-text-field
                placeholder="Confirm Password"
                outlined
                class="white mb-4"
                color="grey"
                hide-details
              ></v-text-field>
              <v-btn
                class="text-capitalize white--text"
                x-large
                color="black"
                block
              >Submit</v-btn>
          </v-col>
      </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>