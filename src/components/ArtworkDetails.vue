<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <!-- ARTWORK DETAILS -->
        <artwork-overiew></artwork-overiew>
        <div class="row justify-content-between">
          <div class="col-8">
            <p class="mb-0">
              <strong class="d-inline-block">
                Currently owned by:
              </strong>
                {{ 'Danny Roosevelt' }}
            </p>
            <div class="mb-0">
              <strong class="d-inline-block">
                Last transacted at:
              </strong>
              USD${{ '450,000' }}
            </div>
          </div>
          <div class="col-4">
            <!-- AGENCY ACTIONS -->
            <div v-if="isAgency || true">
              <el-tooltip class="item"
              effect="dark"
              placement="bottom-start">
                <div slot="content">
                  Send a request to the owner of this artwork<br/>
                  to obtain his/her consent to sell.
                </div>
                <el-button type="primary" plain
                  @click="openOwnerDialog()">
                  Engage Artwork Owner
                  <i class="el-icon-info el-icon-right"></i>
                </el-button>
              </el-tooltip>
            </div>
            <!-- TODO: POLICE ACTIONS -->
            <div v-if="isPolice"></div>

          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-3 artwork-history">
            <!-- TRANSACTION HISTORY -->
            <transaction-history></transaction-history>
          </div>
          <div class="col-9">
            <!-- SUPPORTING DOCUMENTS -->
            <supporting-docs></supporting-docs>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>

    <!-- REQUEST CONSENT DIALOG -->
    <el-dialog
      title="Engage Artwork Owner"
      :visible.sync="ownerDialogVisible"
      width="50%">
      <div class="px-3">
        <div class="row">
          <div class="col-9">
            <el-input
            placeholder="Input owner email..."
            v-model="owner.email"></el-input>
          </div>
          <div class="col-3">
            <el-button icon="el-icon-search" circle></el-button>
          </div>
        </div>
        <div class="mt-2">
          TODO: owner information displayed here...
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ownerDialogVisible = false">Cancel</el-button>
        <el-button type="primary"
        @click="requestConsent()">
          Confirm
          <i style="font-size: 1em;"
          class="material-icons">send</i>
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
/* eslint-disable */
import ArtworkOveriew from "./artwork/ArtworkOverview.vue";
import TransactionHistory from "./artwork/TransactionHistory.vue";
import SupportingDocs from "./artwork/SupportingDocs.vue";

export default {
  data() {
    return {
      isAgency: false,
      isPolice: false,
      ownerDialogVisible: false,
      owner: {
        email: ''
      }
    };
  },
  methods: {
    openOwnerDialog() {
      this.ownerDialogVisible = true
    }
  },
  components: {
    ArtworkOveriew,
    TransactionHistory,
    SupportingDocs
  },
  created() {
    // TODO: initialise isAgency and isPolice
  }
};
</script>
<style>
.artwork-history {
  border-right: 1px solid lightgray;
  padding-right: 1.5rem;
}
</style>


