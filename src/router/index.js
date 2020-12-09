import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pro from './pro'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },
  ...pro
]

const router = new VueRouter({
  routes
})

export default router