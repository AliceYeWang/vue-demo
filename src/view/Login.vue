<template>
  <div>
    <div>这里是登录页面</div>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 一般不用<a>标签-->
    <!-- 所有页面靠js渲染生成  单页应用  页面切换快，首屏时间慢 SEO差-->
    <router-link to="/list">从这里进入列表页面</router-link>
  </div>
</template>

<script>
// 导出一个对象
export default {
  name: 'Login'
}
</script>

<style>
</style>
