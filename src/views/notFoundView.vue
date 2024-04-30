<script setup>
import { ref } from 'vue';
</script>

<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p>Go back to the Sign In page: <router-link to="/signin" class="a-signin">Sign In</router-link></p>
  </div>
</template>
