import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import Login from '@/view/Login'
// @表示是src目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login', // 路由项
      component: Login// 显示的组件的组件名
    },
    {
      path: '/list',
      name: 'TodoList', // 路由项
      component: TodoList// 显示的组件的组件名
    }
  ]
})
// path: '/',表示 当访问根路径时候 根路径的路由对应的是TodoList,
// 而TodoList在'@/components/TodoList'
// @ 指的是src目录
