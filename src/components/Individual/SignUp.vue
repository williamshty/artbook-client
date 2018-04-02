<template>
    <el-dialog title="SIGN UP" center :visible.sync="dialogVisible" width="30%">
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
        <el-button type="primary" @click="onSignUp()">Sign Up</el-button>
        <div class="mt-2 text-center">Already have an account? <a href="" @click="goToLogIn()">Login here!</a></div>
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
                    name: "",
                    email: "",
                    pwd: ""
                },
                pwd2: ""
            };
        },
        methods: {
            onSignUp() {
                dialogVisible = false
            },
            goToLogIn() {}
        }
    };
</script>

<style scoped>
    .el-button {
        width: 100%;
    }
</style>


