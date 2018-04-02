import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AuthorityDisplay from '@/components/Authority/AllArtworksDisplay'
import AuthorityLanding from '@/components/Authority/AuthorityLanding'
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
      path: '/authorityConsole',
      name: 'Authority Console',
      component: AuthorityDisplay
    },
    {
      path: '/authority',
      name: 'Authority Landing',
      component: AuthorityLanding
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
