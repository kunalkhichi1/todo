<template>
  <div class="container">
    <nav>
      <router-link to="/" exact-active-class="active-link">Home</router-link>
      <router-link to="/about" exact-active-class="active-link"
        >About</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 40px;
}

nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
}

.active-link {
  font-weight: bold;
  color: blue;
  border-bottom: 2px solid blue;
}
</style>
