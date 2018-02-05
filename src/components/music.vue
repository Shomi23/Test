<template>
<v-layout>
  <v-flex md8 offset-md2>
    <v-layout wrap id="e3">
      <v-flex xs12>
        <v-toolbar color="grey darken-4">
          <v-toolbar-title class="">
            <h1>Music</h1></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field name="input-1" label="search artist /track" id="testing" v-model="search"></v-text-field>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container grid-list>
          <v-layout row wrap v-for="item in filteredItems" :key="item.id" class="mb-3">
            <v-flex d-flex xs12 md3>
              <img src="/static/doc-images/miles.jpg" height="100%" width="100%" />
            </v-flex>
            <v-flex d-flex xs12 md9>
              <v-card>
                <v-card-title primary-title>
                  <router-link :to="'/music/'+ item.id">
                    <h1 class="headline">{{item.artistTrack}}</h1></router-link>
                </v-card-title>
                <v-card-text>
                  <p>{{item.info | snippet}}</p>
                  <p class="subheading">{{item.date}}</p>
                </v-card-text>
                <v-container>
                  <v-layout>
                    <div class="ikonice" outline large fab color="white">
                      <img class="ikona" src="../assets/beatport.png" alt="">
                    </div>
                    <div class="ikonice" outline large fab color="white">
                      <img class="ikona" src="../assets/deezer.png" alt="">
                    </div>
                    <div class="ikonice" outline large fab color="white">
                      <img class="ikona" src="../assets/apple.png" alt="">
                    </div>
                    <div class="ikonice" outline large fab color="white">
                      <img class="ikona" src="../assets/spotify.png" alt="">
                    </div>
                  </v-layout>
                </v-container>
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
export default {
  data() {
    return {
      search:''
    }
  },
  computed: {
    filteredItems () {
      return this.$store.getters.filterItems.filter((item) => {
        return item.info.match(this.search)
        return item.artistTrack.match(this.search)
      })
    }
  }
}
</script>

<style scoped>
#e3 {
  margin: 30px 0 0 0;
}

.ikona {
  width: 100%;
  height: 100%;
  display: block;
}

.ikonice {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: linear-gradient( #ddd, #fff);
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.9);
  transition: 0.6s;
  margin: 0 20px 0 0;
}

.ikonice:hover {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.73);
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
