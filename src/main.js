// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HighchartsVue from 'highcharts-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './modules/index.js'; // VueX
import './assets/sass/base.scss'

library.add(faUserSecret)
library.add(faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(HighchartsVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
