<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1">
      </div>
      <div class="col-10">
        <el-table
          :data="artworks"
          :default-sort="{prop: 'id', order: 'descending'}"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            sortable>
          </el-table-column>
          <el-table-column
            prop="name"
            label="Title"
            sortable>
          </el-table-column>
          <el-table-column
            prop="artist"
            label="Artist"
            sortable>
          </el-table-column>
          <el-table-column
            prop="onSale"
            label="Status">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.onSale === true ?
                'primary' :
                (scope.row.lost === true? 'danger' : 'info')"
                close-transition>
                {{ formatStatus(scope.row) }}
              </el-tag>
            </template>
          </el-table-column>
          <!-- TODO: owner column? -->
          <el-table-column
            label="Action">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="viewDetails(scope.row)"
                type="text"
                size="small">
                View Details
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="col-1">
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { artworks } from "../../const.js";

export default {
  data() {
    return {
      artworks: artworks
    };
  },
  methods: {
    formatStatus(row) {
      let status = "Normal";
      if (row.onSale) {
        status = "On Sale";
      }
      if (row.stolen) {
        status = "Lost/Stolen";
      }
      return status;
    },
    viewDetails(row) {
    //   console.log("view details");
      this.$router.push(`/my/artwork/${row.id}`);
    }
  }
};
</script>