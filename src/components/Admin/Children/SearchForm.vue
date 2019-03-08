<template>
  <div class="jumbotron">
    <form @submit.prevent="applyFilters">
      <div class="form-group">
        <label for="cityName">City Name</label>
        <input
          v-model="filters.cityName"
          type="text"
          class="form-control"
          id="cityName"
          placeholder="City Name"
          required
        >
      </div>
      <div class="form-group">
        <label for="countryCode">Country Code</label>
        <input
          v-model="filters.countryCode"
          type="text"
          class="form-control"
          id="countryCode"
          placeholder="Country Code"
          required
        >
      </div>
      {{ loading }}
      <button :disabled="loading" type="submit" class="btn btn-primary col-md-12">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "History",
  props: ["value"],
  data() {
    return {
      loading: false,
      errors: {
        status: false,
        message: ""
      }
    };
  },
  computed: {
    filters: {
      get() {
        return this.value;
      },
      set(newValue) {
        vm.$emit("input", newValue);
      }
    }
  },
  mounted() {},
  methods: {
    applyFilters() {
      let self = this;
      const cityName = self.filters.cityName;
      const countryCode = self.filters.countryCode;
      self.loading = true;
      const url = `${
        self.weather.urlBase
      }weather?q=${cityName},${countryCode}&units=metric${self.weather.urlId}`;
      self.$store.dispatch("getCurrentWeather", url)
      .then(() => {
        self.loading = false;
      })
      .catch((error)=> {
        debugger
        self.loading = false;
        self.errors.status = true;
      });
    }
  }
};
</script>
