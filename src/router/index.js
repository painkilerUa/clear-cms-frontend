import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import ForgotPassword from '@/components/pages/ForgotPassword'
import Admin from '@/components/pages/Admin/Admin'
import SecurityConfiguration from '@/components/pages/Admin/SecurityConfiguration'
import Management from '@/components/pages/Admin/Management'
import Resetting from '@/components/pages/ResetPassword/Resetting'
import Reset from '@/components/pages/ResetPassword/Reset'
import Content from '@/components/pages/Content'
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
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'security-configuration',
          name: 'security-configuration',
          component: SecurityConfiguration
        },
        {
          path: 'management',
          name: 'management',
          component: Management
        }
      ]
    },
    {
      path: '/resetting',
      name: 'resetting',
      component: Resetting,
      children: [
        {
          path: 'reset',
          name: 'reset',
          component: Reset
        }
      ]
    },
    {
      path: '/content/:id',
      name: 'content',
      props: true,
      component: Content
    },
    {
      path: '/error',
      component: Error
    },
    {path: '*', redirect: '/error'}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
