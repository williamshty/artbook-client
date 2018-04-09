<template>
  <div class="">
    <police-header></police-header>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content">
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
            <el-table-column label="Update Status">
              <template slot-scope="scope">
                <el-button class="btn--document"
                @click="markMissing(scope.row.artworkID)">
                Mark Missing</el-button>
              </template>
            </el-table-column>
            <el-table-column label="Recover">
              <template slot-scope="scope">
                <el-button class="" type="danger"
                @click="markRecovered(scope.row.artworkID)">
                Mark Recovered</el-button>
              </template>
            </el-table-column>
            <el-table-column label="History">
              <template slot-scope="scope">
                <el-button class="btn--history"
                @click="viewDetails(scope.row.artworkID)">
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
    <mark-as-missing
    :show="displayMarkMissing"
    :artworkId="currentArtworkId"
    @close="closeDialogs()"
    ></mark-as-missing>
    <mark-as-recovered
    :show="displayMarkRecovered"
    :artworkId="currentArtworkId"
    @close="closeDialogs()"
    ></mark-as-recovered>
  </div>
</template>
<script>
import PoliceHeader from './PoliceHeader'
import MarkAsMissing from './MarkAsMissing'
import {allArtworks} from '../../const'
import MarkAsRecovered from './MarkAsRecovered'
export default {
  data () {
    return {
      tableData: allArtworks,
      currentArtworkId: '',
      displayMarkMissing: false,
      displayMarkRecovered: false
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
    markMissing (artworkID) {
      console.log(`Add document for ID: ${artworkID}`)
      this.currentArtworkId = artworkID
      this.displayMarkMissing = true
    },
    markRecovered (artworkID) {
      console.log(`Add document for ID: ${artworkID}`)
      this.currentArtworkId = artworkID
      this.displayMarkRecovered = true
    },
    loadAllArtworks () {
      console.log(`Loading All Artworks`)
    },
    closeDialogs () {
      this.displayMarkRecovered = false
      this.displayMarkMissing = false
    }
  },
  components: {
    PoliceHeader,
    MarkAsMissing,
    MarkAsRecovered
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
