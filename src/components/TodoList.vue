<template>
    <div>
      <AddTodo @todo-added="addTodo" />
      <ul>
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @delete-todo="deleteTodo"
          @toggle-todo="toggleTodo"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import AddTodo from "./AddTodo.vue";
  import TodoItem from "./TodoItem.vue";
  
  export default {
    components: { AddTodo, TodoItem },
    data() {
      return {
        todos: [],
      };
    },
    methods: {
      addTodo(text) {
        this.todos.push({ id: Date.now(), text, completed: false });
      },
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) todo.completed = !todo.completed;
      },
    },
  };
  </script>
  