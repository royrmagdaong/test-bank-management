<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4" tile>
          <router-view></router-view>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style>

</style>