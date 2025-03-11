<template>
  <li :class="['todo-item', { completed: todo.completed }]">
    <span @click="toggleTodo">{{ todo.text }}</span>
    <button @click="deleteTodo">❌</button>
  </li>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: ["todo"],
  setup(props) {
    const store = useStore();

    const toggleTodo = () => store.dispatch("toggleTodo", props.todo.id);
    const deleteTodo = () => store.dispatch("deleteTodo", props.todo.id);

    return { toggleTodo, deleteTodo };
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
}

.todo-item.completed span {
  text-decoration: line-through;
  color: gray;
}
</style>
