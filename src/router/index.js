import Vue from 'vue'
import Router from 'vue-router'
import HomeLogin from '@/components/pages/HomeLogin'
import Error from '@/components/pages/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/login',
      name: 'home-login',
      component: HomeLogin
    },
    {
      path: '/error',
      component: Error
    }
  ]
})
