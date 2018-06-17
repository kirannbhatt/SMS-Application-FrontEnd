import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../modules/Auth'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard/Dashboard'
import LogIn from '@/components/Login/Login'
import SignUp from '@/components/SignUp/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!Auth.isUserAuthenticated()) {
        next({
          path: '/login',
          query: {'ua': true}
        })
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LogIn,
    beforeEnter: (to, from, next) => {
      if (Auth.isUserAuthenticated()) {
        next({
          path: '/dashboard'
        })
      }
      next()
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
  ]
})
