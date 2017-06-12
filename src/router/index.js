import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/containers/login/Login'
import Menu from '@/containers/menu/Menu'
import Intencive from '@/containers/intencive/Intencive'
import IntenciveCheckin from '@/containers/intencive/IntenciveCheckin'

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
      path: '/intensive',
      name: 'Intensive',
      component: Intencive,
      children: [
        {
          path: 'checkin',
          component: IntenciveCheckin
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
