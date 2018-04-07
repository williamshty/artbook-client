<template>
  <!-- A REUSABLE COMPONENT -->
    <div>
        <!-- artwork title -->
        <h1>A World Famous Painting</h1>
        <hr class="mt-1">
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
        <!-- painting images -->
        <el-carousel class="mt-2"
        :interval="5000"
        trigger="click" type="card" height="260px">
            <el-carousel-item
            v-for="index in 6" :key="index">
                <img class="img-fluid mb-1"
                src="https://images.unsplash.com/photo-1516290881724-2230498ea247?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8e018b51e43bd6b19e8b7126943d1a4&auto=format&fit=crop&w=1100&q=80"
                alt="loading artwork image...">
            </el-carousel-item>
        </el-carousel>
        <!-- painting description -->
        <p class="mt-2">In Canada we're known to get a bit of snow in the winter, eh? With this photo ceiling we helped the home owner forget
            about winter with this tropical Photo Ceiling; we can take any high resolution image and print it on our UV Resistant
            vinyl membrane for some stunning effects. We also do these types of installations on walls too!</p>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  
}
</script>
<style scoped>
h1 {
    color: #303133;
}
</style>


