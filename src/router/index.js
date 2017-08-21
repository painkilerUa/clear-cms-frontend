import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import ForgotPassword from '@/components/pages/ForgotPassword'
import AdminManagement from '@/components/pages/AdminManagement'
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
      path: '/admin-management',
      name: 'admin-management',
      component: AdminManagement
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
