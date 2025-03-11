<template>
  <div>
    <AddTodo />
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AddTodo from "./AddTodo.vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: { AddTodo, TodoItem },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.allTodos);

    return { todos };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
