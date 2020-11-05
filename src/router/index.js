import Vue from 'vue'
import Router from 'vue-router'
import Presentation from '@/components/Presentation'
import Competences from '@/components/Competences'
import Parcours from '@/components/Parcours'
import Contact from '@/components/Contact'
import Realisations from '@/components/Realisations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Presentation',
      component: Presentation
    },
    {
      path: '/competences',
      name: 'Competences',
      component: Competences
    },
    {
      path: '/realisations',
      name: 'Realistations',
      component: Realisations
    },
    {
      path: '/parcours',
      name: 'Parcours',
      component: Parcours
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
