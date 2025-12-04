import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  // Add this import

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView  // Now this is properly imported
    },
    {
      path: '/about',
      name: 'about',
      // Lazy-loaded import
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/onboarding1',
      name: 'onboarding1',
      component: () => import('../views/Onboarding1.vue')
    },
    {
      path: '/onboarding2',
      name: 'onboarding2',
      component: () => import('../views/Onboarding2.vue')
    },
    {
      path: '/onboarding3',
      name: 'onboarding3',
      component: () => import('../views/Onboarding3.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue')
    }
  ]
})

export default router