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
      <div v-if="hasCountryCode" class="form-group">
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
      <button :disabled="loading" type="submit" class="btn btn-primary col-md-12">
        <font-awesome-icon v-if="loading" icon="spinner" class="fa-spin"/>
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "History",
  props: {
    value: {
      type: Object
    },
    hasCountryCode: {
      type: Boolean,
      default: false
    }
  },
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
        this.$emit("input", newValue);
      }
    }
  },
  mounted() {},
  methods: {
    applyFilters() {
      this.$emit('on-submit');
    }
  }
};
</script>

<style scoped>
  input {
    text-align: center
  }
</style>