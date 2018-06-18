import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../modules/Auth'
import Main from '@/components/Main'
import Dashboard from '@/components/Dashboard/Dashboard'
import LogIn from '@/components/Login/Login'
import SignUp from '@/components/SignUp/SignUp'
import Home from '@/components/Dashboard/Home'
import Groups from '@/components/Groups/Groups'
import Contacts from '@/components/Contacts/Contacts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
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
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    // beforeEnter: (to, from, next) => {
    //   if (!Auth.isUserAuthenticated()) {
    //     next({
    //       path: '/login',
    //       query: {'ua': true}
    //     })
    //   }
    // },
    children: [
      {
        path: 'groups',
        name: 'Groups',
        component: Groups
      },
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: Contacts
      }
    ]
  }
  ]
})
