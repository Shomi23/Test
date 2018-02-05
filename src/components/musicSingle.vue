<template>
<div class="">
  <h1>{{item.artistTrack}}</h1>
</div>
</template>
<script>
export default {
  data() {
    return {

  }
},
  props: ['id'],
  computed: {
    item() {
      return this.$store.getters.loadeditem(this.id)
    }
  }
}

</script>

<style scoped>
</style>
