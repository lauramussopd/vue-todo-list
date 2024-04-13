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
	<!-- <navbarVue /> -->
	<main class="mainApp">
	  <div class="content">
		<router-view />
	  </div>
	</main>
</div>
  </template>
