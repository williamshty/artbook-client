<template>
  <div class="">
    <div class="navigation navigation--authority">
      Authority Portal
    </div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content">
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
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
<style scoped>
.el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
