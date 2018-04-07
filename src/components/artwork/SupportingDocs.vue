<template>
    <div>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item
            v-for="doc in docs" :key="doc.id"
            :title="doc.name" :name="doc.id">
                <img class="img-fluid"
                :src="doc.path" :alt="doc.name">
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
/* eslint-disable */
import { docs } from "../../const.js";

export default {
  data() {
    return {
      docs: docs
    };
  }
};
</script>
<style scoped>

</style>
