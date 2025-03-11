export default {
    addTodo({ commit }, text) {
      commit("ADD_TODO", text);
    },
    toggleTodo({ commit }, id) {
      commit("TOGGLE_TODO", id);
    },
    deleteTodo({ commit }, id) {
      commit("DELETE_TODO", id);
    },
  };
  