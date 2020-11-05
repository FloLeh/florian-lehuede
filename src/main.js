import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faCode,
  faSchool,
  faEnvelope,
  faLaptop
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'

library.add(faUser, faCode, faSchool, faEnvelope, faLaptop)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init()
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
