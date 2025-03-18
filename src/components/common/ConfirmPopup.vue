<template>
  <div class="popup-overlay" @click.self="onCancel">
    <div class="popup">
      <p>
        <slot name="message">Are you sure?</slot>
      </p>
      <div class="popup-buttons">
        <button @click="onCancel" class="cancel-btn">Cancel</button>
        <button @click="onConfirm" class="confirm-btn">Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onConfirm: {
      type: Function,
      required: true,
    },
    onCancel: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.popup-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.confirm-btn {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.cancel-btn {
  background-color: gray;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.confirm-btn:hover {
  background-color: #0056b3;
}

.cancel-btn:hover {
  background-color: darkgray;
}
</style>
