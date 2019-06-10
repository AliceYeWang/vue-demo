// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import App from './App' 当前目录下的App.vue js json
// 挂载点指的是index.html中的id=app的div元素
// { App }这是ES6写法,实际上是{App:App}，意思是
// 冒号后边表示用了一个局部组件叫App，然后在外层Vue示例里组件名字也叫App
// 在ES6里 键和值 一样 就写一个就可以了
// 模板里边直接把组件渲染出来
import Vue from 'vue'
import App from './App'
import router from './router'
// 自动引入./router目录下的index.js文件
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// router, 实际上是router: router,
// 路由就是根据网址（url）的不同,返回不同的内容给用户
