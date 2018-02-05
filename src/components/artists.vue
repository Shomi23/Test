<template>
  <v-layout>
    <v-flex md8 offset-md2>
      <v-layout wrap id="e3">
        <v-flex xs12>
          <v-container grid-list v-for="artist in artists">
            <v-layout row wrap>
              <v-flex d-flex xs12 md3>
              <img :src="artist.url" height="200"/>
              </v-flex>
              <v-flex  d-flex xs12 md9>
                <v-card>
                  <v-card-title primary-title>
                  <router-link :to="'/artists/'+ artist.id"><h1 class="headline">{{artist.title}}</h1></router-link>
                    <p class="pt-3">{{info | snippet}}</p>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
  </template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      artists: [],
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(response => {
      this.artists = response.data.slice(0, 5)
    })
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}

</style>
