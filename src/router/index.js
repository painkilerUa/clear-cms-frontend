import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import ForgotPassword from '@/components/pages/ForgotPassword'
import Admin from '@/components/pages/Admin/Admin'
import Profile from '@/components/pages/Profile'
import SecurityConfiguration from '@/components/pages/Admin/SecurityConfiguration'
import Management from '@/components/pages/Admin/Management'
import Resetting from '@/components/pages/ResetPassword/Resetting'
import Reset from '@/components/pages/ResetPassword/Reset'
import Content from '@/components/pages/Content'
import ArticlesList from '@/components/pages/ArticlesList'
import Error from '@/components/pages/Error'

Vue.use(Router)

const router = new Router({
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
      meta: {
        requiresAuth: true,
        requiresAuthAdmin: true
      },
      children: [
        {
          path: 'management',
          name: 'management',
          component: Management
        },
        {
          path: '/articles-list/',
          name: 'articles-list',
          component: ArticlesList
        },
        {
          path: 'security-configuration',
          name: 'security-configuration',
          component: SecurityConfiguration
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/resetting',
      name: 'resetting',
      component: Resetting,
      children: [
        {
          path: 'reset/:token',
          name: 'reset',
          props: true,
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

export default router

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } if (to.matched.some(record => record.meta.requiresAuthAdmin)) {
    if (localStorage.getItem('userRole') !== 'Admin') {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
