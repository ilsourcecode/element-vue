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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('../views/Sort.vue')
  },
  {
    path: '/a',
    name: 'A',
    component: () => import('../views/A.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/Radio.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkbox.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/Input.vue')
  }

]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
