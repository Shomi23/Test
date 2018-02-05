import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store/index'
import axios from 'axios'

Vue.use(axios)
Vue.use(Vuetify)
//filters
Vue.filter('snippet',function(value){
  return value.slice(0,200) + '...'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  render: h => h(App)
})
