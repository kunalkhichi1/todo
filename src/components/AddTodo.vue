<template>
  <form @submit.prevent="addNewTodo" class="todo-form">
    <textarea
      v-model="newTodo"
      placeholder="Add a new todo..."
      rows="2"
      autofocus
      :class="{ 'error-border': errorMessage }"
    ></textarea>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <div class="options">
      <label>
        Select Color:
        <input type="color" v-model="selectedColor" class="color-picker" />
      </label>

      <label>
        Select Category:
        <select v-model="selectedCategory">
          <option
            v-for="cat in formattedCategories"
            :key="cat"
            :value="cat.toLowerCase()"
          >
            {{ cat }}
          </option>
          <option value="custom">➕ Add Custom</option>
        </select>
      </label>
    </div>

    <div v-if="selectedCategory === 'custom'">
      <div class="custom-category-wrapper">
        <input
          ref="customCategoryInput"
          type="text"
          v-model="customCategory"
          placeholder="Enter new category"
          :class="['custom-category', { 'error-border': categoryError }]"
        />

        <button type="button" class="cancel-btn" @click="cancelCustomCategory">
          ❌
        </button>
      </div>
      <p v-if="categoryError" class="category-error">{{ categoryError }}</p>
    </div>

    <div class="add-button-wrapper">
      <button type="submit">Add Todo</button>
    </div>
  </form>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const newTodo = ref("");
    const selectedColor = ref("#000000");
    const selectedCategory = ref("work");
    const customCategory = ref("");
    const customCategoryInput = ref(null);
    const errorMessage = ref("");
    const categoryError = ref("");

    const formattedCategories = computed(() => {
      return store.state.categories.map(
        (category) => category.charAt(0).toUpperCase() + category.slice(1)
      );
    });

    const addNewTodo = () => {
      if (!newTodo.value.trim()) {
        errorMessage.value = "Todo cannot be empty!";

        if (
          selectedCategory.value === "custom" &&
          !customCategory.value.trim()
        ) {
          categoryError.value = "Category cannot be empty!";
        }

        return;
      }

      errorMessage.value = "";

      let finalCategory = selectedCategory.value;
      if (selectedCategory.value === "custom") {
        finalCategory = customCategory.value.trim();
        if (!finalCategory) {
          categoryError.value = "Category cannot be empty!";
          return;
        }

        categoryError.value = "";

        store.dispatch("addCategory", finalCategory);
      }

      store.dispatch("addTodo", {
        text: newTodo.value,
        color: selectedColor.value,
        category: finalCategory,
      });

      newTodo.value = "";
      selectedColor.value = "#000000";
      selectedCategory.value = "work";
      customCategory.value = "";
    };

    const cancelCustomCategory = () => {
      selectedCategory.value = "work";
      customCategory.value = "";
    };

    watch(selectedCategory, (newVal) => {
      if (newVal === "custom") {
        setTimeout(() => {
          customCategoryInput.value?.focus();
        }, 0);
      }
    });

    watch(newTodo, (newVal) => {
      if (newVal.trim()) {
        errorMessage.value = "";
      }
    });

    watch(customCategory, (newVal) => {
      if (newVal.trim()) {
        categoryError.value = "";
      }
    });

    return {
      newTodo,
      selectedColor,
      selectedCategory,
      customCategory,
      formattedCategories,
      addNewTodo,
      cancelCustomCategory,
      customCategoryInput,
      errorMessage,
      categoryError,
    };
  },
};
</script>

<style scoped>
.todo-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

textarea {
  height: 80px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}

.error-border {
  border: 1px solid red;
  outline: none;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: -10px;
}

.category-error {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.custom-category-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.custom-category {
  padding: 10px;
  border-radius: 4px;
  flex: 1;
}

.cancel-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.color-picker {
  width: 100px;
  height: 40px;
  border: none;
  cursor: pointer;
  padding: 0;
}

select {
  padding: 5px;
  border-radius: 4px;
}

.add-button-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.add-button-wrapper button {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
}

.add-button-wrapper button:hover {
  background-color: #0056b3;
}
</style>
