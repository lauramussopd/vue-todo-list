<script setup>

import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import navbarVue from '@/components/navbarVue.vue';
import { ref } from 'vue';


const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>


<template>
	<div class="app">
	<navbarVue />
	<main class="mainApp">
	  <div class="content">
		<router-view />
	  </div>
	</main>
</div>
  </template>
  
  
  

  <style scoped>

  nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
  }
  
  .navbar {
	width: 100%;
	background-color: #44c9c8;
  }
  
  nav a.router-link-exact-active {
	color: var(--color-text);
  }
  
  nav a.router-link-exact-active:hover {
	background-color: transparent;
  }
  </style>