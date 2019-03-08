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
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './modules/index.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLodash from 'vue-lodash'
// import './assets/sass/base.scss'

library.add(faUserSecret)
library.add(faUser)
library.add(faSpinner)
library.add(faChartLine)
library.add(faSignOutAlt)
Vue.use(require('vue-moment'));
Vue.use(Element)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(HighchartsVue)
Vue.use(VueLodash)

Vue.prototype.weather = {
  urlId: '&APPID=375a6328896bcf6fb7347fa13778d92e',
  urlBase: 'http://api.openweathermap.org/data/2.5/'
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
