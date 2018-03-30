import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AuthorityDisplay from '@/components/Authority/AllArtworksDisplay'
import LogIn from '@/components/Individual/LogIn'
import SignUp from '@/components/Individual/SignUp'

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
    },
    {
      path: '/login',
      component: LogIn
    },
    {
      path: '/signup',
      component: SignUp
    }
  ]
})
