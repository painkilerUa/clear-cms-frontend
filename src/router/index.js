import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Error from '@/components/pages/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/error',
      component: Error
    },
    {path: '*', redirect: '/error'}
  ]
})
