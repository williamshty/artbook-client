<template>
  <div>
    <div class="title">
      <div class="title__portal-group">
        <el-button class="bg-transparent"
        type="primary" plain round
        @click="whichDialogVisible = 'authority'">
        Authority
        </el-button>
        <el-button class="bg-transparent"
        type="primary" plain round
        @click="whichDialogVisible = 'agency'">
        Agency
        </el-button>
        <el-button class="bg-transparent"
        type="primary" plain round
        @click="whichDialogVisible = 'my'">
        Individual
        </el-button>
        <el-button class="bg-transparent"
        type="primary" plain round
        @click="whichDialogVisible = 'police'">
        Police
        </el-button>
      </div>
    </div>
    <div class="header">
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Artbook</span>
          <span class="heading-primary--sub">Reliable Artwork Ownership and Provenance Information Provider</span>
        </h1>
        <a href="#" class="btn btn--white btn--animated"
        @click="showSignup()">
        Join Us
        </a>
      </div>
    </div>
    <!-- INDIVIDUAL LOGIN DIALOG -->
    <my-login
    :show="myDialogVisible"
    @close="closeDialogs()"
    @signup="showSignup()">
    </my-login>
    <!-- INDIVIDUAL SIGNUP DIALOG -->
    <signup
    :show="signupVisible"
    @close="closeDialogs()"
    ></signup>
  </div>
</template>
<script>
/* eslint-disable */
import MyLogin from "./individual/MyLogin.vue";
import Signup from "./individual/Signup.vue";

export default {
  data() {
    return {
      whichDialogVisible: "", // my, agency, police, authority
      signupVisible: false
    };
  },
  computed: {
    myDialogVisible() {
      return this.whichDialogVisible == 'my';
    }
  },
  methods: {
    closeDialogs() {
      this.whichDialogVisible = '';
      this.signupVisible = false;
    },
    showSignup() {
      this.closeDialogs();
      this.signupVisible = true
    }
  },
  components: {
    MyLogin,
    Signup
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
<style scoped>
button.bg-transparent {
  background-color: Transparent !important;
}
</style>
