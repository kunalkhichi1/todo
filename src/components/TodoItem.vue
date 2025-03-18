<template>
  <li :class="['todo-item', { completed: todo.completed }]">
    <template v-if="isEditing && !todo.completed">
      <input v-model="editedText" class="edit-input" />
      <input type="color" v-model="editedColor" class="color-picker" />
      <select v-model="editedCategory">
        <option
          v-for="cat in formattedCategories"
          :key="cat"
          :value="cat.toLowerCase()"
        >
          {{ cat }}
        </option>
      </select>
      <button @click="saveEdit">✅</button>
      <button @click="cancelEdit">❌</button>
    </template>

    <template v-else>
      <span @click="toggleTodo" :style="{ color: todo.color }">{{
        todo.text
      }}</span>

      <div>
        <button v-if="!todo.completed" @click="startEdit" class="rotate-pencil">
          ✏️
        </button>
        <button @click="openConfirmPopup">❌</button>
      </div>
    </template>

    <ConfirmPopup
      v-if="showPopup"
      :onConfirm="confirmDelete"
      :onCancel="closePopup"
    >
      <template #message>Are you sure you want to delete this todo?</template>
    </ConfirmPopup>
  </li>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ConfirmPopup from "./common/ConfirmPopup.vue";

export default {
  props: ["todo"],
  components: { ConfirmPopup },
  setup(props) {
    const store = useStore();
    const showPopup = ref(false);
    const isEditing = ref(false);
    const editedText = ref(props.todo.text);
    const editedColor = ref(props.todo.color || "#000000");
    const editedCategory = ref(props.todo.category || "work");

    const toggleTodo = () => store.dispatch("toggleTodo", props.todo.id);
    const formattedCategories = computed(() => {
      return store.state.categories.map(
        (category) => category.charAt(0).toUpperCase() + category.slice(1)
      );
    });

    const startEdit = () => {
      if (!props.todo.completed) {
        isEditing.value = true;
      }
    };

    const cancelEdit = () => {
      isEditing.value = false;
      editedText.value = props.todo.text;
      editedColor.value = props.todo.color || "#000000";
      editedCategory.value = props.todo.category || "work";
    };
    const saveEdit = () => {
      if (!props.todo.completed) {
        store.dispatch("editTodo", {
          id: props.todo.id,
          text: editedText.value,
          color: editedColor.value,
          category: editedCategory.value,
        });
        isEditing.value = false;
      }
    };

    const openConfirmPopup = () => {
      showPopup.value = true;
    };

    const closePopup = () => {
      showPopup.value = false;
    };

    const confirmDelete = () => {
      store.dispatch("deleteTodo", props.todo.id);
      closePopup();
    };

    return {
      toggleTodo,
      openConfirmPopup,
      closePopup,
      confirmDelete,
      showPopup,
      isEditing,
      editedText,
      editedColor,
      editedCategory,
      startEdit,
      cancelEdit,
      saveEdit,
      formattedCategories,
    };
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
}

.todo-item.completed span {
  text-decoration: line-through;
  color: gray;
}

span {
  cursor: pointer;
}

.edit-input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.color-picker {
  width: 50px;
  height: 30px;
  border: none;
  cursor: pointer;
}

button {
  margin-left: 0.1rem;
}

.rotate-pencil {
  display: inline-block;
  transform: scaleX(-1);
}
</style>
