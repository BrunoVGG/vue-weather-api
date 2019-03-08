<template>
  <div>
    <div class="header">
      <a @click.prevent="toggleRightMenu" href="#" id="menu-action">
        <i class="fa fa-bars"></i>
        <span>Close</span>
      </a>
      <a @click="userLogout" class="logout-area">
        Logout
        <i class="fa fa-sign-out-alt"></i>
        <font-awesome-icon icon="sign-out-alt"/>
      </a>
    </div>

    <div :class="{'hovered' : showRightMenu}" class="sidebar">
      <ul>
        <li>
          <router-link :to="{name:'Today'}">
            <i class="fa fa-desktop"></i>
            <span>Today</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'History'}">
            <i class="fa fa-calendar"></i>
            <span>History</span>
          </router-link>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      showRightMenu: false
    };
  },
  computed: {
    user() {
      return this.$store.state.User.name;
    }
  },
  methods: {
    toggleRightMenu() {
      this.showRightMenu = !this.showRightMenu;
    },
    userLogout() {
      sessionStorage.clear();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/variables.scss";
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #f5f5f5;
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;

  a.logout-area {
    float: right;
    margin-right: 10px;
    cursor: pointer;
  }
}

i.fa {
  font-size: 16px;
}

p {
  font-size: 16px;
  line-height: 1.428571429;
}

.header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: $green;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  .logo {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  #menu-action {
    display: block;
    float: left;
    width: 60px;
    height: 50px;
    line-height: 50px;
    margin-right: 15px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    background: rgba(0, 0, 0, 0.15);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    i {
      display: inline-block;
      margin: 0 5px;
    }
    span {
      width: 0px;
      display: none;
      overflow: hidden;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.25);
    }
    &.active {
      width: 250px;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      span {
        display: inline;
        width: auto;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }
    }
  }
}

.sidebar {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 50px;
  height: 100%;
  width: 60px;
  background: #fff;
  border-right: 1px solid #ddd;
  text-align: center;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &:hover,
  &.active,
  &.hovered {
    opacity: 0.7;
    width: 130px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      display: block;
      a {
        display: block;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        color: #444;
        text-align: left;

        &:hover {
          text-decoration: none;
        }

        i {
          display: inline-block;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          -webkit-animation-duration: 0.7s;
          -moz-animation-duration: 0.7s;
          -o-animation-duration: 0.7s;
          animation-duration: 0.7s;
          -webkit-animation-fill-mode: both;
          -moz-animation-fill-mode: both;
          -o-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        span {
          display: inline-block;
          height: 60px;
          line-height: 60px;
        }
        &:hover {
          text-decoration: none;
          background-color: #eee;
          i {
            -webkit-animation-name: swing;
            -moz-animation-name: swing;
            -o-animation-name: swing;
            animation-name: swing;
          }
        }
      }
    }
  }
}

.main {
  position: relative;
  display: block;
  top: 50px;
  left: 0;
  padding: 15px;
  padding-left: 75px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &.active {
    padding-left: 275px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  .jumbotron {
    background-color: #fff;
    padding: 30px !important;
    border: 1px solid #dfe8f1;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    h1 {
      font-size: 24px;
      margin: 0;
      padding: 0;
      margin-bottom: 12px;
    }
  }
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    -ms-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    -ms-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    -ms-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    -ms-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    -ms-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}
</style>