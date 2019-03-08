import Vue from 'vue';

const CurrentWeather = {
  state: {
    data: null
  },
  mutations: {
    refreshCurrentWeather(state, data) {
      state.data = data;
    }
  },
  actions: {
    getCurrentWeather(context, url) {
      return new Promise((resolve, reject)=> {
        Vue.axios.get(url)
        .then((response) => {
          context.commit('refreshCurrentWeather', response.data);
          resolve();
        })
        .catch((errors) => {
          context.commit('refreshCurrentWeather', response.data);
          reject(errors);
        })
      });
    }
  }
}

export default CurrentWeather 