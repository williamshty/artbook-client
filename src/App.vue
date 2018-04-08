<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
/* eslint-disable */
require("./assets/css/style.css");
export default {
  name: "App",
  data() {
    return {
    };
  },
  created() {
    if (typeof Storage !== "undefined") {
      // clear session storage when user navigates back to homepage
      if (sessionStorage.user) sessionStorage.clear;
    } else {
      this.$notify({
        title: "Warning",
        message: "Web Storage not supported by the browser..",
        type: "warning"
      });
    }
  }
};
</script>
<style>
html{
  font-size: 62.5%;
}
</style>
