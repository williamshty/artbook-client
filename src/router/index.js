import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AuthorityDisplay from '@/components/Authority/AllArtworksDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/authority',
      name: 'Authority',
      component: AuthorityDisplay
    }
  ]
})
