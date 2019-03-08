<template>
  <div>
    <div class="jumbotron">
      <h1 id="hello,-world!">
        History
        <a class="anchorjs-link" href="#hello,-world!">
          <span class="anchorjs-icon"></span>
        </a>
      </h1>

      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "History",
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3] // sample data
          }
        ]
      }
    };
  },
  mounted() {
    this.callForecast();
  },
  methods: {
    callForecast() {
      const url =
        "http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=375a6328896bcf6fb7347fa13778d92e";
      Vue.axios.get(url).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/variables.scss";
</style>