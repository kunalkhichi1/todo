export default {
    allTodos: state => state.todos,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    pendingTodos: state => state.todos.filter(todo => !todo.completed),
  };
  