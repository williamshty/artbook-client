<template>
<div>
    <el-dialog style="background-color: #F39C12;" :title="'Payment '+ this.$route.params.paymentId" center :visible="true" width="30%">
    <!-- <i class="el-icon-star-on"></i> -->
    <el-form>
        <h3>Amount Due: {{dueAmount}}</h3>
        <h3>Account Balance: {{accountBalance}}</h3>
        <!-- <el-form-item>
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
        </el-form-item> -->
    </el-form>
    <el-button style="margin-top:10%" type="primary" @click="onPay()">Pay <i class="el-icon-d-arrow-right el-icon-right"></i></el-button>
    <!-- <div class="mt-2 text-center">Already have an account?
        <a href="" @click="goLogin()">Login here!</a>
    </div> -->
</el-dialog>
</div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        pwd: ""
      },
      pwd2: "",
      dueAmount: this.$route.params.price,
      accountBalance: '4000'
    };
  },
  computed: {
  },
  methods: {
    onPay() {
      console.log('payment starts')
      this.$http
        .get("/user/payment/"+this.$route.params.token)
        .then(resp => {
            console.log(resp)
            this.$message({
                message: 'Congrats, this is a success message.',
                type: 'success'
            })
        })
        .catch(err => {
          console.log(err)
        //   this.showError('Error', `Add Document Failed Status: ${err}`, 'warning')
        })
    }
  }
};
</script>
<style>
.el-button {
  width: 100%;
}
</style>


