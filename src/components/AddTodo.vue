<template>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return { newTodo: "" };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.$emit("todo-added", this.newTodo);
          this.newTodo = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    gap: 8px;
  }
  </style>
  