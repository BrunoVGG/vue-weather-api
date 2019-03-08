<template>
  <div class="row">
    <div class="col-md-3">
      <SearchForm 
        v-model="filters"
        :has-country-code="true"
        @on-submit="callForecastWeather"/>
    </div>
    <div class="col-md-9">
      <div class="jumbotron">
        <h1 id="hello,-world!">
          Forecast
          <a class="anchorjs-link" href="#hello,-world!">
            <span class="anchorjs-icon"></span>
          </a>
        </h1>

        <button @click="param = 'temp'" 
          :class="param === 'temp' ? 'btn-primary' : 'btn-outline-primary'"
          class="btn"
          type="button" 
        >
          Temperature
        </button>

        <button @click="param = 'wind'" 
          :class="param === 'wind' ? 'btn-secondary' : 'btn-outline-secondary'"
          class="btn"
          type="button" 
        >
          Wind Speed
        </button>

        <button @click="param = 'humidity'" 
          :class="param === 'humidity' ? 'btn-success' : 'btn-outline-success'"
          class="btn"
          type="button" 
        >
          Wind Speed
        </button>

        <highcharts :options="chartOptions"></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import SearchForm from "./SearchForm";

export default {
  name: "History",
  components: {
    SearchForm
  },
  data() {
    return {
      filters: {
        cityName: "London",
        countryCode: "UK"
      },
      param: "temp",
      chartOptions: {
        title: {
          text: "weather"
        },
        subtitle: {
          text: "5 Days"
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
      const url = `${this.weather.urlBase}forecast?q=${this.filters.cityName}&units=metric${this.weather.urlId}`;
      this.$store.dispatch("getForecastWeather", url).then(() => {
        this.updateData();
      });
    },
    updateData() {
      this.chartOptions.series = [];
      if (this.$store.state.ForecastWeather.data) {
        const param = this.param;
        let data = this.$store.state.ForecastWeather.data.list
          .map((item) => {

            if (param === "wind") {
              return item.wind.speed;
            } else if (param === "temp") {
              return item.main.temp;
            } else {
              return item.main.humidity;
            }
            
            let newItem = {
              data: []
            };
          }
        );

        this.chartOptions.series.push({'data': data})

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