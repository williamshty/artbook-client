import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AuthorityDisplay from '@/components/authority/AllArtworksDisplay'
import AuthorityLanding from '@/components/authority/AuthorityLanding'
import LogIn from '@/components/individual/LogIn'
import SignUp from '@/components/individual/SignUp'
import ArtworkDetails from '@/components/ArtworkDetails'

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
    },
    {
      path: '/details',
      component: ArtworkDetails
    }
  ]
})
