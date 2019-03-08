<template>
  <div class="row">
    <div class="col-md-3">
      <SearchForm 
        v-model="filters"
        :error.sync="error"
        @on-submit="callTodayData"
      />
    </div>
    <div class="col-md-9">
      <div class="jumbotron">
        <h1 id="hello,-world!">Today
          <p>{{ new Date() | moment("dddd, MMMM YYYY") }}</p>
          <a class="anchorjs-link" href="#hello,-world!">
            <span class="anchorjs-icon"></span>
          </a>
        </h1>

        <div v-if="data && data.main && data.main.temp" class="card-deck">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Temperature
                <span v-for="(item, i) in data.weather" :key="i">
                  <img
                    :src="`http://openweathermap.org/img/w/${item.icon}.png`"
                    class="weather-icon"
                  >
                </span>
              </h5>
              <p class="temp-value card-text">{{ data.main.temp }} °C</p>
              <p class="card-text">
                <label>min:</label>
                {{ data.main.temp_min }} °C
              </p>
              <p class="card-text">
                <label>max:</label>
                {{ data.main.temp_max }} °C
              </p>
              <p v-for="(item, i) in data.weather" :key="i" class="card-text">{{ item.description }}</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Sunrise
                <span v-for="(item, i) in data.weather" :key="i">
                  <img :src="`http://openweathermap.org/img/w/01d.png`" class="weather-icon">
                </span>
              </h5>
              <p class="temp-value card-text">{{ data.sys.sunrise | moment("h:mm a") }}</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Sunset
                <span v-for="(item, i) in data.weather" :key="i">
                  <img :src="`http://openweathermap.org/img/w/01n.png`" class="weather-icon">
                </span>
              </h5>
              <p class="temp-value card-text">{{ data.sys.sunset | moment("h:mm a") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import SearchForm from './SearchForm';

export default {
  name: 'TodayWheather',
  components: {
    SearchForm
  },
  data() {
    return {
      error: '',
      chartOptions: {
        series: [
          {
            data: [1, 2, 3] // sample data
          }
        ]
      },
      sunrise: null,
      sunset: null,
      filters: {
        cityName: 'London',
        countryCode: 'UK'
      }
    };
  },
  computed: {
    data() {
      return this.$store.state.CurrentWeather.data;
    }
  },
  mounted() {
    this.callTodayData();
  },
  methods: {
    callTodayData() {
      let self = this;
      self.error = '';
      const url = `${self.weather.urlBase}weather?q=${self.filters.cityName}&units=metric${self.weather.urlId}`;
      self.$store.dispatch('getCurrentWeather', url)
      .catch(errors => {
        self.error = errors.response.data.message;
      });;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/variables.scss";

.card-title {
  font-size: 2em;
}

.temp-value {
  font-size: 3em;
}

.weather-icon {
  width: 2em;
}

label {
  font-weight: bold;
}
</style>