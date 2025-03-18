<template>
  <div>
    <AddTodo />

    <div v-for="(todos, category) in categorizedTodos" :key="category">
      <h3 class="category-title">{{ category }}</h3>
      <draggable
        :list="todos"
        group="todos"
        @change="onDrop($event, category)"
        item-key="id"
      >
        <template #item="{ element }">
          <TodoItem :todo="element" />
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AddTodo from "./AddTodo.vue";
import TodoItem from "./TodoItem.vue";
import draggable from "vuedraggable";

export default {
  components: { AddTodo, TodoItem, draggable },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.allTodos);
    const categories = computed(() => store.state.categories);

    const categorizedTodos = computed(() => {
      return categories.value.reduce((acc, category) => {
        const categoryTodos = todos.value.filter(
          (t) => t.category === category
        );
        if (categoryTodos.length > 0) {
          acc[category] = categoryTodos;
        }
        return acc;
      }, {});
    });

    const onDrop = (event, newCategory) => {
      if (event.added) {
        const movedTodo = event.added.element;
        store.dispatch("editTodo", {
          ...movedTodo,
          category: newCategory.toLowerCase(),
        });
      }
    };

    return { categorizedTodos, onDrop };
  },
};
</script>

<style scoped>
.category-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
  margin-top: 20px;
  text-transform: capitalize;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
