<template>
  <div>
    <PTCBanner />
    <router-view></router-view>
  </div>
</template>

<script>
import PTCBanner from '../../components/admin/PTCBanner.vue'
export default {
  components:{
    PTCBanner
  }
}
</script>

<style>

</style>