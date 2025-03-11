<template>
  <div>
    <h1>My Todo App</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "HomePage",
  components: { TodoList },
};
</script>
