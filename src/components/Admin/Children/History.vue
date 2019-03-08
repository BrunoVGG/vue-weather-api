<template>
  <div class="row">
    <div class="col-md-3">
      <SearchForm 
        v-model="filters" 
        :has-country-code="true" 
        @on-submit="callForecastWeather"
        :error.sync="error"
      />
    </div>
    <div class="col-md-9">
      <div class="jumbotron">
        <h1 id="hello,-world!">
          Forecast
          <a class="anchorjs-link" href="#hello,-world!">
            <span class="anchorjs-icon"></span>
          </a>
        </h1>

        <button
          @click="param = 'temp'"
          :class="param === 'temp' ? 'btn-info' : 'btn-outline-info'"
          class="btn"
          type="button"
        >Temperature</button>
        
        <button
          @click="param = 'wind'"
          :class="param === 'wind' ? 'btn-info' : 'btn-outline-info'"
          class="btn"
          type="button"
        >Wind Speed</button>
        
        <button
          @click="param = 'humidity'"
          :class="param === 'humidity' ? 'btn-info' : 'btn-outline-info'"
          class="btn"
          type="button"
        >Humidity</button>

        <highcharts :options="chartOptions"></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import SearchForm from './SearchForm';

export default {
  name: 'History',
  components: {
    SearchForm
  },
  data() {
    return {
      error: '',
      filters: {
        cityName: 'London',
        countryCode: 'UK'
      },
      param: 'temp',
      chartOptions: {
        title: {
          text: 'Weather - 5 Days'
        },
        series: [
          {
            data: []
          }
        ]
      }
    };
  },
  watch: {
    param() {
      this.updateData();
    }
  },
  mounted() {
    this.callForecastWeather();
  },
  methods: {
    callForecastWeather() {
      let self = this;
      self.error = '';
      const url = `${self.weather.urlBase}forecast?q=${self.filters.cityName},${self.filters.countryCode}&units=metric${this.weather.urlId}`;
      self.$store.dispatch('getForecastWeather', url).then(() => {
        self.updateData();
      })
      .catch(errors => {
        self.error = errors.response.data.message;
      });
    },
    updateData() {
      this.chartOptions.series = [];
      if (this.$store.state.ForecastWeather.data) {
        const param = this.param;
        let data = this.$store.state.ForecastWeather.data.list.map(item => {
          if (param === 'wind') {
            return item.wind.speed;
          } else if (param === 'temp') {
            return item.main.temp;
          } else {
            return item.main.humidity;
          }

          let newItem = {
            data: []
          };
        });

        this.chartOptions.series.push({ data: data });
      } else {
        this.chartOptions.series = [];
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/variables.scss";
</style>