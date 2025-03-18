export default {
    ADD_TODO(state, todo) {
      const formattedCategory = todo.category.trim().toLowerCase();

      state.todos.push({ id: Date.now(), ...todo, category: formattedCategory, completed: false });

      if (!state.categories.includes(formattedCategory)) {
        localStorage.setItem("categories", JSON.stringify(state.categories));
      }

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    EDIT_TODO(state, updatedTodo) {
      const index = state.todos.findIndex((t) => t.id === updatedTodo.id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...updatedTodo };
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
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
    ADD_CATEGORY(state, category) {
      const formattedCategory = category.trim().toLowerCase();
      if (!state.categories.includes(formattedCategory)) {
        state.categories.push(formattedCategory);
        localStorage.setItem("categories", JSON.stringify(state.categories));
      }
    }
  };
  