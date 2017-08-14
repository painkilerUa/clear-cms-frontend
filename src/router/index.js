import Vue from 'vue'
import Router from 'vue-router'
import HeaderLogin from '@/components/common/HeaderLogin'
import Error from '@/components/common/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/header-login',
      name: 'header-login',
      component: HeaderLogin
    },
    {
      path: '/error',
      component: Error
    }
  ]
})
