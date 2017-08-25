import Vue from 'vue'
import Router from 'vue-router'

// 登录注册忘记密码
import Login from '@/views/Login/login'
import Reg from '@/views/Reg/reg'
import Forget from '@/views/Forget/forget'

import Home from '../views/RouteView/home'

// 用户列表
import UserList from '../views/Content/User/List/list'

// 店铺信息
import ShopInfo from '../views/Content/Setting/ShopInfo/ShopInfo/shopInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        redirect: to => {
            return 'login';
        },
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/v1',
      name: 'v1',
      component: Home,
      children: [{
          hidden: true,
          path: '',
          redirect: to => {
              return 'setting'
          }
      },{
          path: 'setting',
          name: 'setting',
          children: [{
              path: 'shopinfo',
              name: '店铺信息',
              component: ShopInfo
          }]
      }]
    }
  ]
})
