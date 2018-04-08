<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
            <h3>Consigned Artworks</h3>
            <div class="row justify-content-end">
                <div class="col-4">
                    <el-tooltip class="item"
                    effect="dark"
                    content="Hit Enter to search."
                    placement="bottom-end">
                        <el-input
                        prefix-icon="el-icon-search"
                        placeholder="Query an artwork by its ID..."
                        v-model="query"
                        @change="queryArtwork()">
                        </el-input>
                    </el-tooltip>
                </div>
                <!-- <div class="col-2">
                    <el-button type="primary">
                        Search
                    </el-button>
                </div> -->
            </div>
            <!-- TODO: table -->
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
      return {
          query: ''
      }
  },
  methods: {
      queryArtwork() {
          alert('entered')
      }
  }
}
</script>
<style scoped>
</style>
