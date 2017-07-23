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

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
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
