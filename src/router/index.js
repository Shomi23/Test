import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import music from '@/components/music'
import artists from '@/components/artists'
import events from '@/components/events'
import contact from '@/components/contact'
import artist from '@/components/artist'
import musicSingle from '@/components/musicSingle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/artists',
      name: 'artists',
      component: artists
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/artists/:id',
      name: 'artist',
      component: artist
    },
    {
      path: '/music/:id',
      name: 'musicSingle',
      props: true,
      component: musicSingle
    }
  ],
    mode: 'history'
})
