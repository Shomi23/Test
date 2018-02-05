import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedItems: [{
        id: 1,
        artistTrack: 'Neutron - Structure',
        date: '16 December 2017',
        info: "After 'Lost Tracks', an accidental debut album and 'Substance' that had a more focused vision of sound, here is an long overdue long play release from Belgrade based artist and label owner, Bojan Musulin a.k.a. Neutron."
      },
      {
        id:2,
        artistTrack: "Neutron - Quasar Redshift",
        date: '01 December 2017',
        info: "Here's a track from the upcoming album 'Structure' produced by WAXX TRAX founder Bojan Musulin a.k.a. Neutron."
      },
      {
        id: 3,
        artistTrack: "Ijon Muça - Super Frantic Beams EP",
        date: "06 April 2017",
        info: "Ijon Muça returns to WAXX TRAX with 4 serious peak time techno bangers. Super Frantic Beams EP resonates with immense energy and dark screeching acid basslines.",
      },
      {
        id: 4,
        artistTrack: "Matej Rusmir - UMIEM EP",
        date: "01 April 2017",
        info: "Matej Rusmir debuts with a lot of style on WAXX TRAX with his 'Umiem EP'. This astonishingly talented young producer is only sixteen at the time of releasing this record."
      },
      {
        id: 5,
        artistTrack: "Jizz - On The Love EP",
        date: "01 March 2017",
        info: "This long awaited release by Jizz comes at just the right time for those packing their summer 2017 tunes a bit earlier."
      },
      {
        id: 6,
        artistTrack: "French Phil - All Night Long EP",
        date: "20 February 2017",
        info: "Philibert Boucher or French Phil, is a producer and vinyl DJ from Versailles, France, living in San Francisco, California."
      },
      {
        id: 7,
        artistTrack: "Best of WAXX TRAX: Deep House Winter",
        date: "30 January 2017",
        info: "For the first compilation release of 2017 we decided to create a selection of the deepest and underground house music released on WAXX TRAX in the past few years."
      },
      {
        id: 8,
        artistTrack: "Best Of WAXX TRAX: Enigmatic Techno",
        date: "26 January 2017",
        info: "Once again we collect best Techno experiments released on WAXX TRAX in the last three years!",
      },
      {
        id: 9,
        artistTrack: "Best of WAXX TRAX: Deep & Tech House",
        date: "25 july 2016",
        info: "This summer is yet to go crazy with our collection of deep and tech house tunes, and even some space disco stuff intended to spice up your DJ sets this season.",
      },
      {
        id: 10,
        artistTrack: "Best of WAXX TRAX: Cryptic Techno",
        date: "09 May 2016",
        info: "We decided to create a selection of the darkest, enigmatic techno that has surfaced on WAXX TRAX in the past few years. This is the most abstract, bass heavy collection of experiments that is created only for the brave...",
      }
    ],
    pics: [{
        src: 'static/doc-images/marek.jpg'
      },
      {
        src: 'static/doc-images/guy.jpg'
      },
      {
        src: 'static/doc-images/cert.jpg'
      }
    ]
  },
  mutations:{

  },
  getters:{
    loadedItems(state){
      return state.loadedItems.sort((itemA,itemB) => {
        return itemA.id > itemB.id
      })
    },
    filterItems(getters,state){
      return getters.loadedItems.slice(0,5)
    },
    loadeditem (state) {
      return (itemId) => {
        return state.loadedItems.find((item) => {
          return item.id === itemId
      })
    }
  },


}
})
