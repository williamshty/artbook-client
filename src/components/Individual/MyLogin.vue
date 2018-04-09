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
        <el-input v-model="form.pwd" type="password" placeholder="Password">
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
      let body = {
        email: this.form.email,
        password: this.form.pwd
      };
      console.log('login...')
      this.$http
        .post("user/login", this.$qs.stringify(body))
        .then(resp => {
          console.log(resp)
          sessionStorage.user = resp.data
          // this.$router.push(`/my`)
          this.getArtwork()
        })
        .catch(err => {
          console.log(err)
          this.showError('Error', `Login failed. Status: ${err}`, 'warning')
        });
      this.closeLogin();
    },
    closeLogin() {
      this.visible = false; // evoke setter to emit close event
    },
    goSignup() {
      this.closeLogin();
      this.$emit("signup");
    },
    showError(title, msg, type) {
      this.$notify({
        title: title,
        message: msg,
        type: type // success, warning
      });
    },
    getArtwork() {
      console.log('get artwork')
      this.$http
        .get("artwork/823412c2-aced-4376-92eb-814596d46a8a")
        .then(resp => {
          console.log(resp)
          // sessionStorage.user = resp.data
          // this.$router.push(`/my`)
          // this.getArtwork()
        })
        .catch(err => {
          console.log(err)
          this.showError('Error', `Retrieval failed. Status: ${err}`, 'warning')
        });
    }
  }
};
</script>
<style scoped>
.el-button {
  width: 100%;
}
</style>
