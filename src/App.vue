<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- &lt;router-view/&gt;中显示的是当前路由地址对应的路由内容
    * 路由内容通过index.js中的路由设置来找 -->
  </div>
</template>

<script>
/* 路由就是根据网址（url）的不同,返回不同的内容给用户
*  router-view显示的是当前路由地址对应的内容 */
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
