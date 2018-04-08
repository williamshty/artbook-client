<template>
    <div class="header">
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Artbook</span>
                    <span class="heading-primary--sub">The Perfect Artwork Ownership and Record Solution</span>
                </h1>
              <a href="#" class="btn btn--white btn--animated" v-scroll-to="'.heading-secondary'">Join Us</a>
            </div>
            <div class="header__logo-box">
              <img src="http://www.iconninja.com/files/77/679/757/note-book-icon.png" alt="">
            </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {

  },
  beforeMount () {
  }
}
</script>
<style>
html{
  font-size: 62.5%;
}
</style>
