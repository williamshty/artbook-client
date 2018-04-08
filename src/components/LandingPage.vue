<template>
<div>
  <div class="title">
      <div class="title__portal-group">
             <el-button type="info" round @click="reirectToAuthority">Authority</el-button>
             <el-button type="info" round @click="reirectToAuthority">Agency</el-button>
             <el-button type="info" round @click="reirectToAuthority">Individual</el-button>
             <el-button type="info" round @click="reirectToAuthority">Police</el-button>
      </div>
    </div>

<ArtsHeader></ArtsHeader>
<market-place></market-place>
</div>
</template>
<script>
import ArtsHeader from './Header'
import MarketPlace from './MarketPlace'
import router from '@/router/index.js'
export default {
  name: 'LandingPage',
  data () {
    return {
    }
  },
  components: {
    ArtsHeader,
    MarketPlace
  },
  methods: {
    reirectToAuthority () {
      router.replace('/authority')
    }
  },
  beforeMount () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
