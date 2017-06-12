import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/containers/login/Login'
import Menu from '@/containers/menu/Menu'
import Incentive from '@/containers/incentive/Incentive'
import IncentiveCheckin from '@/containers/incentive/IncentiveCheckin'
import IncentiveHistory from '@/containers/incentive/IncentiveHistory'
import IncentiveReward from '@/containers/incentive/IncentiveReward'

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
        }
      ]
    },
    {
      path: '/order',
      name: 'Order',
      component: Hello
    },
    { path: '*', redirect: '/login' }
  ]
})
