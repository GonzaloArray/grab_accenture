import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LandingView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/board/:id',
      name: 'board',
      component: () => import('../views/BoardView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path:'/work',
      name:'work',
      component: () => import('../views/WorksView.vue')
    },
    {
      path:'/about',
      name:'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/contact',
      name:'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path:'/politic',
      name:'politic',
      component: () => import('../views/PoliticView.vue')
    },
    {
      path:'/terms',
      name:'terms',
      component: () => import('../views/TermsView.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/register',
      name:'regisiter',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router
