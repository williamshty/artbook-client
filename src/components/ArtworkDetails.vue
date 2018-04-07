<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <!-- ARTWORK DETAILS -->
        <artwork-overiew></artwork-overiew>
        <div class="row justify-content-between">
          <div class="col">
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
          <div class="col">
            <!-- AGENCY ACTIONS -->

            <!-- TODO: POLICE ACTIONS -->

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
  </div>
</template>
<script>
/* eslint-disable */
import ArtworkOveriew from "./artwork/ArtworkOverview.vue";
import TransactionHistory from "./artwork/TransactionHistory.vue";
import SupportingDocs from "./artwork/SupportingDocs.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    ArtworkOveriew,
    TransactionHistory,
    SupportingDocs
  }
};
</script>
<style>
.artwork-history {
  border-right: 1px solid lightgray;
  padding-right: 1.5rem;
}
</style>


