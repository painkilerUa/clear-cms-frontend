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
import ArticlesList from '@/components/pages/ArticlesList'
import Article from '@/components/pages/Article'
import CategoriesList from '@/components/pages/CategoriesList'
import TagsList from '@/components/pages/TagsList'
import UsersList from '@/components/pages/UsersList'
import AddArticle from '@/components/pages/AddArticle'
import EditArticle from '@/components/pages/EditArticle'
// Todo part
import Todo from '@/components/admin/todo/Todo'
import TodoList from '@/components/admin/todo/TodoList'
import AddTodo from '@/components/admin/todo/AddTodo'
import EditTodo from '@/components/admin/todo/EditTodo'
// General part
import Error from '@/components/pages/Error'
// users frontend
import Home from '@/components/main/Home'
import Index from '@/components/main/Index'
import Search from '@/components/main/Search'
import Content from '@/components/main/Content'
import AskExperts from '@/components/main/AskExperts'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: '/content/:id',
          name: 'content',
          props: true,
          component: Content
        },
        {
          path: '/ask-experts',
          name: 'AskExperts',
          component: AskExperts
        }
      ]
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
        // requiresAuth: true,
        // requiresAuthAdmin: true
      },
      children: [
        {
          path: 'management',
          name: 'management',
          component: Management
        },
        {
          path: 'security-configuration',
          name: 'security-configuration',
          component: SecurityConfiguration
        },
        {
          path: 'articles-list',
          name: 'articles-list',
          component: ArticlesList
        },
        {
          path: 'article',
          name: 'article',
          component: Article,
          children: [
            {
              path: 'add',
              name: 'add-article',
              component: AddArticle
            },
            {
              path: 'edit/:id',
              name: 'edit-article',
              component: EditArticle
            }
          ]
        },
        {
          path: 'todo',
          name: 'todo',
          component: Todo,
          children: [
            {
              path: 'add',
              name: 'add-todo',
              component: AddTodo
            },
            {
              path: 'edit/:id',
              name: 'edit-todo',
              component: EditTodo
            }
          ]
        },
        {
          path: 'todo-list',
          name: 'todo-list',
          component: TodoList
        },
        {
          path: 'categories',
          name: 'categories',
          component: CategoriesList
        },
        {
          path: 'tags',
          name: 'tags',
          component: TagsList
        },
        {
          path: 'users',
          name: 'users',
          component: UsersList
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
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
