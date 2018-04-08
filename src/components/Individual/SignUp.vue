<template>
<div>
    <el-dialog title="SIGN UP" center :visible.sync="visible" width="30%">
    <el-form>
        <el-form-item>
            <el-input v-model="form.name" placeholder="Name">
                <i slot="suffix" class="el-input__icon material-icons">account_circle</i>
            </el-input>
        </el-form-item>
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
        <el-form-item>
            <el-input v-model="pwd2" placeholder="Confirm Password">
                <i slot="suffix" class="el-input__icon material-icons">lock</i>
            </el-input>
        </el-form-item>
    </el-form>
    <el-button type="primary" @click="onSignup()">Sign Up</el-button>
    <!-- <div class="mt-2 text-center">Already have an account?
        <a href="" @click="goLogin()">Login here!</a>
    </div> -->
</el-dialog>
</div>
</template>
<script>
/* eslint-disable */
export default {
  props: ["show"],
  data() {
    return {
      form: {
        name: "",
        email: "",
        pwd: ""
      },
      pwd2: ""
    };
  },
  computed: {
    visible: {
      get() {
        return this.show;
      },
      set(newValue) {
        this.$emit("close");
      }
    }
  },
  methods: {
    onSignup() {
      // TODO: signup logic
      this.closeSignup();
    },
    closeSignup() {
      this.visible = false; // evoke setter to emit close event
    },
    goLogin() {}
  }
};
</script>
<style scoped>
.el-button {
  width: 100%;
}
</style>


