import Vue from 'vue'
import Router from 'vue-router'
import HomeLogin from '@/components/common/HomeLogin'
import Error from '@/components/common/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/home-login',
      name: 'home-login',
      component: HomeLogin
    },
    {
      path: '/error',
      component: Error
    }
  ]
})
