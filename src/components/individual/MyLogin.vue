<template>
<div>
  <el-dialog title="SIGN IN" center :visible.sync="visible" width="30%">
    <el-form>
      <el-form-item>
        <el-input v-model="form.email" placeholder="Email Address">
          <i slot="suffix" class="el-input__icon material-icons">email</i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.pwd" placeholder="Password">
          <i slot="suffix" class="el-input__icon material-icons">lock</i>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" round @click="onLogin()">Login</el-button>
    <div class="mt-2 text-center">
      Don't have an account?
      <el-button style="width: 60px;"
      type="text"
      @click="goSignup()">
      Sign up!
      </el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
/* eslint-disable */
import Signup from "./Signup.vue";

export default {
  props: ["show"],
  data() {
    return {
      form: {
        email: "",
        pwd: ""
      }
    };
  },
  computed: {
    visible: {
      get() {
        return this.show;
      },
      set(newValue) {
        this.$emit("close"); // let parent set this dialog to invisible
      }
    }
  },
  methods: {
    onLogin() {
      // TODO: login logic
      this.closeLogin()
    },
    closeLogin() {
      this.visible = false; // evoke setter to emit close event
    },
    goSignup() {
      this.closeLogin()
      this.$emit('signup');
    }
  }
};
</script>
<style scoped>
.el-button {
  width: 100%;
}
</style>
