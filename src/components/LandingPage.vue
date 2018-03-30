<template>
<div>
  <div class="title">
      <div class="title__portal-group">
             <a href="#" class="btn btn--black btn--animated btn--navigate" @click="$router.push('/authority')">Authority</a>
             <a href="#" class="btn btn--black btn--animated btn--navigate">Agency</a>
             <a href="#" class="btn btn--black btn--animated btn--navigate">Individual</a>
             <a href="#" class="btn btn--black btn--animated btn--navigate">Police</a>
      </div>
    </div>

<ArtsHeader></ArtsHeader>
</div>
</template>
<script>
import ArtsHeader from './Header'
export default {
  name: 'LandingPage',
  data () {
    return {
    }
  },
  components: {
    ArtsHeader
  },
  methods: {
  },
  beforeMount () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
