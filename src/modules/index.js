//Vuex
import Vue from 'vue'
import Vuex from 'vuex'

import User from './User.js'

Vue.use(Vuex)

const modules = {
  User: User,
}

const store = new Vuex.Store({
  modules: modules
})

export default store