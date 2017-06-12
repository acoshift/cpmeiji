import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/containers/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/intensive',
      name: 'Intensive',
      component: Hello,
      children: [
        {
          path: 'checkin',
          component: Hello
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
