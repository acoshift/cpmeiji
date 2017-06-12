import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/containers/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Hello',
      component: Login
    },
    {
      path: '/intensive',
      name: 'Hello',
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
      name: 'Hello',
      component: Hello
    },
    { path: '*', redirect: '/login' }
  ]
})
