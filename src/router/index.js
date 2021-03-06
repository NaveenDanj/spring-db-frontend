import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/resetpwd',
    name: 'ResetPassword',
    component: () => import('../views/Auth/ResetPassword/ResetPassword.vue')
  },
  {
    path: '/resetsuccess',
    name: 'ResetSuccess',
    component: () => import('../views/Auth/ResetPassword/Success.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
