import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/containers/login/Login'
import Menu from '@/containers/menu/Menu'

import Profile from '@/containers/profile/Profile'
import Log from '@/containers/log/Log'
import History from '@/containers/history/History'

import Order from '@/containers/order/Order'
import OrderSelectRound from '@/containers/order/OrderSelectRound'
import OrderSelectCategory from '@/containers/order/OrderSelectCategory'
import OrderSelectProduct from '@/containers/order/OrderSelectProduct'
import OrderSummary from '@/containers/order/OrderSummary'

import { API } from '@/services'

Vue.use(Router)

const mustLogin = (to, from, next) => {
  API.isLogin().first().subscribe((b) => {
    if (b) {
      next()
      return
    }
    next('/login')
  })
}

const mustNotLogin = (to, form, next) => {
  API.isLogin().do(console.log).first().subscribe((b) => {
    if (!b) {
      next()
      return
    }
    next('/menu')
  })
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: mustNotLogin
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      beforeEnter: mustLogin
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: mustLogin
    },
    {
      path: '/log',
      name: 'Log',
      component: Log,
      beforeEnter: mustLogin
    },
    {
      path: '/history',
      name: 'History',
      component: History,
      beforeEnter: mustLogin
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      beforeEnter: mustLogin,
      children: [
        {
          path: 'round',
          component: OrderSelectRound
        },
        {
          path: 'category',
          component: OrderSelectCategory
        },
        {
          path: 'category/:categoryId',
          component: OrderSelectProduct
        },
        {
          path: 'summary',
          component: OrderSummary
        },
        {
          path: '*',
          redirect: 'location'
        }
      ]

    },
    { path: '*', redirect: '/login' }
  ]
})

export default router
