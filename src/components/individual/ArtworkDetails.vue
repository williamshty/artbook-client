<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <!-- ARTWORK DETAILS -->
        <artwork-overiew></artwork-overiew>
        <hr>
        <div class="row">
          <div class="col-4 artwork-history">
            <!-- TRANSACTION HISTORY -->
            <transaction-history></transaction-history>
          </div>
          <div class="col-8">
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
import ArtworkOveriew from "../artwork/ArtworkOverview.vue";
import TransactionHistory from "../artwork/TransactionHistory.vue";
import SupportingDocs from "../artwork/SupportingDocs.vue";

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
  padding-right: 2rem;
}
</style>


