import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/containers/login/Login'
import Menu from '@/containers/menu/Menu'

import Incentive from '@/containers/incentive/Incentive'
import IncentiveCheckin from '@/containers/incentive/IncentiveCheckin'
import IncentiveHistory from '@/containers/incentive/IncentiveHistory'
import IncentiveReward from '@/containers/incentive/IncentiveReward'

import Order from '@/containers/order/Order'
import OrderSelectLocation from '@/containers/order/OrderSelectLocation'
import OrderSelectProduct from '@/containers/order/OrderSelectProduct'
import OrderSummary from '@/containers/order/OrderSummary'

Vue.use(Router)

export default new Router({
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
      path: '/incentive',
      name: 'Incentive',
      component: Incentive,
      children: [
        {
          path: 'checkin',
          component: IncentiveCheckin
        },
        {
          path: 'history',
          component: IncentiveHistory
        },
        {
          path: 'reward',
          component: IncentiveReward
        },
        {
          path: '*',
          redirect: 'checkin'
        }
      ]
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      children: [
        {
          path: 'location',
          component: OrderSelectLocation
        },
        {
          path: 'product',
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
