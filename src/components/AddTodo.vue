<template>
  <form @submit.prevent="addNewTodo">
    <input v-model="newTodo" placeholder="Add a new task..." />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const newTodo = ref("");
    const store = useStore();

    const addNewTodo = () => {
      if (newTodo.value.trim()) {
        store.dispatch("addTodo", newTodo.value);
        newTodo.value = "";
      }
    };

    return { newTodo, addNewTodo };
  },
};
</script>

<style scoped>
form {
  display: flex;
  gap: 10px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
