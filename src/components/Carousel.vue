<template>
  <v-carousel v-model="model" hide-delimiter-background cycle height="600px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      items:[
          {
              src: '/books.jpg'
          },
          {
              src: '/laptop.jpg'
          },
          {
              src: '/bag.jpg'
          }
      ]
    }),
  }
</script>

<style>

</style>