<template>
    <li :class="['todo-item', { completed: todo.completed }]">
      <span @click="toggleTodo">{{ todo.text }}</span>
      <button @click="$emit('delete-todo', todo.id)">❌</button>
    </li>
  </template>
  
  <script>
  export default {
    props: ["todo"],
    methods: {
      toggleTodo() {
        this.$emit("toggle-todo", this.todo.id);
      },
    },
  };
  </script>
  
  <style scoped>
  span {
    cursor: pointer;
  }
  </style>
  