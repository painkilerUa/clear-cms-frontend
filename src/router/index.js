import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Error from '@/components/pages/Error'
import Content from '@/components/pages/Content'

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
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/error',
      component: Error
    },
    {path: '*', redirect: '/error'}
  ]
})
