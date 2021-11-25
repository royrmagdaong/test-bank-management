<template>
  <div>
    <PTCBanner />
    <router-view></router-view>
  </div>
</template>

<script>
import PTCBanner from '../../components/PTCBanner.vue'
export default {
  components:{
    PTCBanner
  }
}
</script>

<style>

</style>