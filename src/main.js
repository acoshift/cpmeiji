import Vue from 'vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'
import App from './App'
import router from './router'
import { API } from './services'
import '@/styles/main.scss'
import 'sweetalert/dist/sweetalert.css'
Vue.config.productionTip = false

Vue.use(VueRx, Rx)

API.setRouter(router)

Vue.mixin({
  computed: {
    $api () {
      return API
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
