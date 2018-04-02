<template>
  <div class="">
    <authority-header></authority-header>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content">
          <el-button class="btn-add" type="primary" icon="el-icon-plus">Add New Artwork</el-button>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="artworkID" label="Artwork ID">
            </el-table-column>
            <el-table-column prop="artworkTitle" label="Artwork Title">
            </el-table-column>
            <el-table-column prop="artworkArtist" label="Artist">
            </el-table-column>
            <el-table-column prop="artworkOwner" label="Owner">
            </el-table-column>
            <el-table-column label="Documents">
              <template slot-scope="scope">
                <el-button
                size="mini"
                type="danger"
                @click="viewDocuments(scope.row.artworkID)">
                View Documents</el-button>
              </template>
            </el-table-column>
            <el-table-column label="History">
              <template slot-scope="scope">
                <el-button
                size="mini"
                type="warning"
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
  </div>
</template>
<script>
import AuthorityHeader from './AuthorityHeader'
export default {
  data () {
    return {
      tableData: [
        {
          artworkID: '123',
          artworkTitle: 'Sunflower',
          artworkArtist: 'Van Goh',
          artworkOwner: 'STY'
        },
        {
          artworkID: '223',
          artworkTitle: 'Sunflower',
          artworkArtist: 'Van Goh',
          artworkOwner: 'STY'
        },
        {
          artworkID: '333',
          artworkTitle: 'Sunflower',
          artworkArtist: 'Van Goh',
          artworkOwner: 'STY'
        },
        {
          artworkID: '444',
          artworkTitle: 'Sunflower',
          artworkArtist: 'Van Goh',
          artworkOwner: 'STY'
        }
      ]
    }
  },
  methods: {
    viewDocuments (artworkID) {
      console.log(`Documents for ID: ${artworkID}`)
    },
    viewHistory (artworkID) {
      console.log(`History for ID: ${artworkID}`)
    },
    loadAllArtworks () {
      console.log(`Loading All Artworks`)
    }

  },
  components: {
    AuthorityHeader
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
  .btn-add {
    position: relative;
    padding-bottom: 0;
    left: 50%;
    transform: translate(-50%,50%);
    background-color: #4CAF50;
    color: #ffffff;
    border-color: #4CAF50;
  }
</style>
