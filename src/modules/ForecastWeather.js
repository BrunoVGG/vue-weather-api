import Vue from 'vue';

const ForecastWeather = {
  state: {
    data: null
  },
  mutations: {
    refreshForecastWeather(state, data) {
      state.data = data;
    }
  },
  actions: {
    getForecastWeather(context, url) {
      return new Promise((resolve, reject)=> {
        Vue.axios.get(url)
        .then((response) => {
          context.commit('refreshForecastWeather', response.data);
          resolve();
        })
        .catch((errors) => {
          reject(errors);
        })
      });
    }
  }
}

export default ForecastWeather 