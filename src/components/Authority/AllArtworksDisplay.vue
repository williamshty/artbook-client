<template>
  <div class="">
    <authority-header></authority-header>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content">
          <el-button class="btn--add" type="primary" icon="el-icon-plus" @click="displayAddArtwork = true">Add New Artwork</el-button>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="artworkID" label="Artwork ID" sortable>
            </el-table-column>
            <el-table-column prop="artworkTitle" label="Artwork Title" sortable>
            </el-table-column>
            <el-table-column prop="artworkArtist" label="Artist" sortable>
            </el-table-column>
            <el-table-column prop="artworkOwner" label="Owner" sortable>
            </el-table-column>
            <el-table-column label="Documents">
              <template slot-scope="scope">
                <el-button class="btn--document"
                @click="viewDetails(scope.row.artworkID)">
                View Documents</el-button>
              </template>
            </el-table-column>
            <el-table-column label="History">
              <template slot-scope="scope">
                <el-button class="btn--history"
                @click="viewHistory(scope.row.artworkID)">
                View History</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <add-new-artwork
    :show="displayAddArtwork"
    @close="closeDialogs()"
    ></add-new-artwork>
  </div>
</template>
<script>
import AuthorityHeader from './AuthorityHeader'
import AddNewArtwork from './AddNewArtwork'
import {allArtworks} from '../../const'
export default {
  data () {
    return {
      displayAddArtwork: false,
      tableData: allArtworks
    }
  },
  methods: {
    // viewDocuments (artworkID) {
    //   console.log(`Documents for ID: ${artworkID}`)
    // },
    viewHistory (artworkID) {
      console.log(`History for ID: ${artworkID}`)
    },
    viewDetails (artworkID) {
      console.log('view details')
      this.$router.push(`/artwork/${artworkID}`)
    },
    loadAllArtworks () {
      console.log(`Loading All Artworks`)
    },
    closeDialogs () {
      this.displayAddArtwork = false
    }

  },
  components: {
    AuthorityHeader,
    AddNewArtwork
  },
  beforeMount () {
    this.loadAllArtworks()
  }
}
</script>
<style>
html{
}
</style>

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
  .btn--add {
    position: relative;
    padding-bottom: 0;
    left: 50%;
    transform: translate(-50%,50%);
    background-color: #68C3A3;
    color: #ffffff;
    border-color: #68C3A3;
  }
  .btn--history {
    background-color: #1F3A93;
    color: #ffffff;
    border-color: #1F3A93;
  }
  .btn--document {
    background-color: #22A7F0;
    color: #ffffff;
    border-color: #22A7F0;
  }
</style>
