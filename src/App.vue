<template>
<v-app dark class="wax">
  <v-navigation-drawer width='300' temporary fixed v-model="sideNav">
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in menuItems" router :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor:pointer"><img class="pt-2" width='50px' src="./assets/wo3.png" /></router-link>
    </v-toolbar-title>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor:pointer">WAXXTRAX</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="sideNav = !sideNav"></v-toolbar-side-icon>
    <v-toolbar-items v-for="item in menuItems" class="hidden-sm-and-down">
      <v-btn flat router :to="item.link">{{item.title}}<v-icon class="pl-2">{{ item.icon }}</v-icon></v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <main id="mainmain">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </main>
</v-app>
</template>
<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [{
        title: 'Music',
        link: '/music',
        icon: 'library_music',
      }, {
        title: 'Artists',
        link: '/artists',
        icon: 'bubble_chart',
      }, {
        title: 'Events',
        link: '/events',
        icon: 'event_available',
      }, {
        title: 'Contact',
        link: '/contact',
        icon: 'contacts',
      }]
    }

    }
  }

</script>
<style >
@import url('https://fonts.googleapis.com/css?family=Kavivanar');

.wax {
  font-family: 'Kavivanar', cursive;
}

.fade-enter-active {
  transition: 1s ease-in-out;
}

.fade-leave-to,
.fade-enter {
  filter: blur(30px);
}
.btn--active{

}
</style>                                                                                                                  
