<template>
  <v-carousel class="mt-4">
    <v-carousel-item v-for="pic in pics" :src="pic.src"></v-carousel-item>
  </v-carousel>
</template>
<script>


export default {
  name: "",
  data() {
    return {

    }
  },
  computed:{
    pics() {
      return this.$store.state.pics
    }
  }
}
</script>
<style scoped>

</style>
