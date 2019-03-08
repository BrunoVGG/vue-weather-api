<template>
  <div class="row">
    <div class="col-md-3">
      <SearchForm v-model="filters" @on-submit="callForecastWeather"/>
    </div>
    <div class="col-md-9">
      <div class="jumbotron">
        <h1 id="hello,-world!">
          History
          <a class="anchorjs-link" href="#hello,-world!">
            <span class="anchorjs-icon"></span>
          </a>
        </h1>

        <button @param="param = 'temp'" type="button" class="btn btn-outline-primary">
          Temperature
        </button>
        <button @param="param = 'wind'" type="button" class="btn btn-outline-secondary">
          Wind Speed
        </button>
        <button @param="param = 'humidity'" type="button" class="btn btn-outline-success">
          humidity
        </button>

        <highcharts :options="chartOptions"></highcharts>
        {{ chartOptions }}
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
      param: 'temp',
      chartOptions: {
        title: {
          text: "Temperature"
        },
        subtitle: {
          text: "5 Days"
        },
        series: [
          {
            data: this.data
          }
        ]        
      }
    };
  },
  // computed: {
  //   data() {
  //     if (this.$store.state.ForecastWeather.data) {
  //       const param = this.param;
  //       return this.$store.state.ForecastWeather.data.list.map(function(item) {

  //         if (param === 'wind') {
  //           return item.wind.speed;
  //         } else if (param === 'temp') {
  //           return item.main.temp;
  //         } else {
  //           return item.main.humidity;
  //         }
  //       });
  //     } else {
  //       return [];
  //     }
  //   },
  //   chartOptions() {
  //     return {
  //       title: {
  //         text: "Temperature"
  //       },
  //       subtitle: {
  //         text: "5 Days"
  //       },
  //       series: [
  //         {
  //           data: this.data
  //         }
  //       ]
  //     };
  //   }
  // },
  mounted() {
    this.callForecastWeather();
  },
  methods: {
    callForecastWeather() {
      const url = `${this.weather.urlBase}forecast?q=${
        this.filters.cityName
      }&units=metric${this.weather.urlId}`;
      this.$store.dispatch("getForecastWeather", url).then(()=> {
        this.updateData();
      });
    },
    updateData() {
      if (this.$store.state.ForecastWeather.data) {
        debugger
        const param = this.param;
        this.chartOptions.series = this.$store.state.ForecastWeather.data.list.map(function(item) {

          if (param === 'wind') {
            return item.wind.speed;
          } else if (param === 'temp') {
            return item.main.temp;
          } else {
            return item.main.humidity;
          }
        });
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