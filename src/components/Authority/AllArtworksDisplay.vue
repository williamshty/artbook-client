<template>
  <div class="">
      <el-row :gutter="24">
        <el-col :span="4"><div class="grid-content"></div></el-col>
        <el-col :span="16">
            <div class="grid-content" style="background-color:red;">
                    123
            </div>
        </el-col>
        <el-col :span="4"><div class="grid-content"></div></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {

  },
  beforeMount () {
  }
}
</script>
<style>

html {
font-size: 1.6rem;
}
</style>
