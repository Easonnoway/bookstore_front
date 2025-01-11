import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/logIn.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signUp.vue')
    },
    {
      path: '/userinfo',
      name: 'userInfo',
      component: () => import('../views/userInfo/index.vue')
    },
    {
      path: '/bookdetail',
      name: 'bookdeTail',
      component: () => import('../views/bookDetail/index.vue')
    },
    {
      path: '/bookstore',
      name: 'bookStore',
      component: () => import('../views/sellerStore/index.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/orderPage/index.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../views/managePage/index.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../views/chartPage/index.vue')
    }
  ]
})

export default router
