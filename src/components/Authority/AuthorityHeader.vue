<template>
  <div>
    <div class="navigation navigation--authority" @click="backToLanding()">
      Authority Portal
    </div>
  </div>
</template>
<script>
import router from '@/router/index.js'
export default {
  data () {
    return {
    }
  },
  methods: {
    backToLanding () {
      router.replace('/authority')
    }
  },
  beforeMount () {
  }
}
</script>
<style>
</style>
