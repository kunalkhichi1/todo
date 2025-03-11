<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
    <router-link to="/">Go Back Home</router-link>
  </div>
</template>

<style>
.not-found {
  text-align: center;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 2rem;
  color: red;
}
</style>
