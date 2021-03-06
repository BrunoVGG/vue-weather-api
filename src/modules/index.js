//Vuex
import Vue from 'vue'
import Vuex from 'vuex'

import User from './User.js'
import CurrentWeather from './CurrentWeather.js'
import ForecastWeather from './ForecastWeather.js'

Vue.use(Vuex)

const modules = {
  User: User,
  CurrentWeather: CurrentWeather,
  ForecastWeather: ForecastWeather
}

const store = new Vuex.Store({
  modules: modules
})

export default store