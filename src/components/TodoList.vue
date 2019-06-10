<template>
  <div>
    <div>
      <input /> <button>提交</button>
    </div>
    <ul>
      <v-todo-item></v-todo-item>
    </ul>

  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: {
    'v-todo-item': TodoItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
