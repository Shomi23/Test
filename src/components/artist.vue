<template>
  <v-layout >
    <v-flex xs12>
      <div class="artist-img">
        <img :src=artists.url width="100%" height="100%">
        </div>
        <v-card-title primary-title>
            <h3 class="headline">{{artists.title}}</h3>
        </v-card-title>
        <p>{{info}}</p>
    </v-flex>
  </v-layout>
</template>>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: this.$route.params.id,
      artists: [],
      info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/photos/' + this.id).then(response => {
      this.artists = response.data
    })
  }
}
</script>
<style scoped>
.artist-img{
  width: 100%;
  height: 35vh;
}
</style>
