import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import AuthorityDisplay from '@/components/authority/AllArtworksDisplay'
import AuthorityLanding from '@/components/authority/AuthorityLanding'
import PoliceDisplay from '@/components/police/PoliceArtworksDisplay'
import ArtworkDetails from '@/components/ArtworkDetails'
import MyArtworks from '@/components/individual/MyArtworks'
import ConsignedArtworks from '@/components/agency/ConsignedArtworks'
import AddArtwork from '@/components/authority/AddNewArtwork'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: Home
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
      path: '/policeConsole',
      name: 'Police Console',
      component: PoliceDisplay
    },
    {
      path: '/artwork/:id',
      component: ArtworkDetails
    },
    {
      path: '/my',
      component: MyArtworks
    },
    {
      path: '/agency',
      component: ConsignedArtworks
    },
    {
      path: '/addArtwork',
      component: AddArtwork
    }
  ]
})
