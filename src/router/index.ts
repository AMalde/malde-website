import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThoughtsView from '../views/ThoughtsView.vue'
import DesignView from '../views/DesignView.vue'

import BlogPost from '../components/BlogElements/BlogEntry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/thoughts',
      name: 'thoughts',
      component: ThoughtsView, 
    },
    {
      path: '/thoughts/:id',
      name: 'thoughts',
      component: BlogPost, 
    },
    {
      path: '/design',
      name: 'design',
      component: DesignView
    }
  ]
})

export default router
