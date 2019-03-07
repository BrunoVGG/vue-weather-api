<template>
  <form>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
        <!-- Icon -->
        <div class="fadeIn first">
          <h1>
            <font-awesome-icon icon="user"/> Login
          </h1>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="onSubmitLogin">
          <input
            v-model="formData.login"
            :class="{'error' : errors.login}"
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="login"
          >
          <div v-if="errors.login" class="error">Wrong login... </div>
          <input
            v-model="formData.password"
            :class="{'error' : errors.password}"
            type="password"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
          >
          <div v-if="errors.password" class="error">Wrong password... </div>
          <input type="submit" class="fadeIn fourth btn-send" value="Log In">
        </form>
        <!-- <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div> -->
      </div>
    </div>
  </form>
</template>

<script>
import Vue from "vue";

export default {
  name: "HelloWorld",
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
    onSubmitLogin: function(event) {
      let self = this;
      this.errors.login = false;
      this.errors.password = false;

      this.$store
        .dispatch("login", this.formData)
        .then(() => {
          self.$router.push({name: 'Admin'})
        })
        .catch(errors => {
          this.errors = errors;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import 'src/assets/sass/variables.scss';

 /* FORM TYPOGRAPHY*/

  input[type="button"],
  input[type="submit"],
  input[type="reset"] {
    background-color: $green-light;
    border: none;
    color: white;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  input[type="button"]:hover,
  input[type="submit"]:hover,
  input[type="reset"]:hover {
    background-color: $green;
  }

  input[type="button"]:active,
  input[type="submit"]:active,
  input[type="reset"]:active {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

  input[type="text"],
  input[type="password"] {
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
  }

  input[type="text"]:placeholder,
  input[type="password"]:placeholder {
    color: #cccccc;
  }
</style>