export default {
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    editTodo({ commit }, updatedTodo) {
      commit("EDIT_TODO", updatedTodo);
    },
    toggleTodo({ commit }, id) {
      commit("TOGGLE_TODO", id);
    },
    deleteTodo({ commit }, id) {
      commit("DELETE_TODO", id);
    },
    addCategory({ commit }, category) {
      commit("ADD_CATEGORY", category);
    }
  };
  