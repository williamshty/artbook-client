<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <!-- ARTWORK DETAILS -->
        <div class="artwork-card">
        <!-- artwork title -->
          <h1>A World Famous Painting</h1>
          <!-- creator info -->
          <div class="row justify-content-between mb-0">
            <div class="col">
              <i class="material-icons">person_pin</i>
              <span class="align-text-bottom">
                Vicent Van Goh
              </span>
            </div>
            <div class="col">
              <i class="material-icons">date_range</i>
              <span class="align-text-bottom">
                April, 2016
              </span>
            </div>
            <div class="col">
              <i class="material-icons">location_on</i>
              <span class="align-text-bottom">
                Paris, France
              </span>
            </div>
            <div class="col">
              <i class="material-icons">fingerprint</i>
              <span class="align-text-bottom">
                0392746
              </span>
            </div>
            <div class="col">
              <i class="material-icons text-success">info</i>
              <span class="align-text-bottom text-success">
                ON SALE/LOST
              </span>
            </div>
          </div>
          <!-- painting image -->
          <img class="img-fluid mb-1"
            src="https://images.unsplash.com/photo-1516290881724-2230498ea247?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8e018b51e43bd6b19e8b7126943d1a4&auto=format&fit=crop&w=1100&q=80"
            alt="loading artwork image...">
          <!-- painting description -->
          <p>In Canada we're known to get a bit of snow in the winter, eh?  With this photo ceiling we helped the home owner forget about winter with this tropical Photo Ceiling; we can take any high resolution image and print it on our UV Resistant vinyl membrane for some stunning effects.  We also do these types of installations on walls too!</p>
          <p class="mb-0">Currently owned by: {{ 'Danny Roosevelt' }}</p>
          <p class="mb-0">Last transacted at: USD${{ '450,000' }}</p>
        </div>
        <hr>
        <div class="row">
          <div class="col-4">
            <!-- TRANSACTION HISTORY -->
            <div class="artwork-history">
              <div>
                <p class="text-right my-0">
                  Jan 23, 2017</p>
                <p class="text-right my-0">
                  Sold by <strong>Vintage Arts Gallery</strong></p>
                <p class="text-right my-0">at USD$450,000</p>
                <p class="text-right my-3"><i class="el-icon-caret-top ml-auto"></i></p>
              </div>
            </div>
          </div>
          <div class="col-8">
            <!-- SUPPORTING DOCUMENTS -->
            <div class="artwork-documents"></div>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  
}
</script>
<style>
.artwork-history {
  border-right: 1px solid lightgray;
  padding-right: 2rem;
}
</style>


