<template>
  <layout>

    <div class="main">
      <div class="hipsum">
        <div class="jumbotron">
          <h1 id="hello,-world!">Hello, world!<a class="anchorjs-link" href="#hello,-world!"><span class="anchorjs-icon"></span></a></h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><a class="btn btn-primary" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    </div>

  </layout>
</template>

<script>
import Vue from "vue";
import Layout from "../Layout/Default";
import Layout2 from "@/components/Layout/Default";

export default {
  name: "HelloWorld",
  components: {
    Layout
  },
  data() {
    return {
      formData: {
        login: "admin",
        password: "123456"
      },
      errors: {
        login: false,
        password: false
      },
      alert: {
        message: "hello world"
      },
      login: {
        login: "",
        password: ""
      },
      shake: false,
      good: "",
      fake: {
        login: "vincent",
        password: "admin"
      }
    };
  },
  computed: {
    user() {
      return this.$store.state.User.name;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
@import '@/assets/sass/variables.scss';
</style>