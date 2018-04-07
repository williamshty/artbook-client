<template>
  <el-dialog title="SIGN IN" center :visible.sync="dialogVisible" width="30%">
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
    <el-button type="primary" @click="onLogIn()">Login</el-button>
    <div class="mt-2 text-center">Don't have an account?
      <a href="" @click="goToSignUp()">Sign up!</a>
    </div>
  </el-dialog>
</template>

<script>
/* eslint-disable */
export default {
  // TODO: dialogVisible
  props: ["isIndieOrAgency"],
  data() {
    return {
      dialogVisible: true,
      form: {
        email: "",
        pwd: ""
      }
    };
  },
  methods: {
    onLogIn() {
      dialogVisible = false;
    },
    goToSignUp() {}
  }
};
</script>

<style scoped>
.el-button {
  width: 100%;
}
</style>

