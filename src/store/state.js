export default {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    categories: JSON.parse(localStorage.getItem("categories")) || ["work", "personal", "shopping"],
  };