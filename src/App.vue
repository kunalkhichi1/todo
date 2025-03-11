<template>
  <div class="container">
    <h1>Vue To-Do App</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  components: { TodoList },
};
</script>

<style scoped>
@import "./assets/styles.css";
</style>
