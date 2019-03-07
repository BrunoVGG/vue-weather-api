<template>
  <div class="hello">
    <button @click="callApi" class="btn btn-success">CALL API</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    callApi() {
      debugger
      const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=375a6328896bcf6fb7347fa13778d92e'; 
      Vue.axios.get(url).then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
