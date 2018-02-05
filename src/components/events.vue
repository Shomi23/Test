<template>
<v-layout column class="mt-5">
  <v-flex xs12 sm6 offset-sm3>

    <v-container fluid grid-list-md class="">
      <v-layout row wrap>
        <v-flex v-for="blog in blogs">
          <v-card>
            <v-card-media :src="blog.url" height="300px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline" v-text="blog.title"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-actions class="error">
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</v-layout>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      blogs: []
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/photos/').then(response => {
      this.blogs = response.data.slice(0, 3)
    })
  }
}
</script>

<style  scoped>

</style>
