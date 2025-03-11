export default {
    ADD_TODO(state, text) {
      const newTodo = { id: Date.now(), text, completed: false };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    TOGGLE_TODO(state, id) {
      const todo = state.todos.find(t => t.id === id);
      if (todo) todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(t => t.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  };
  