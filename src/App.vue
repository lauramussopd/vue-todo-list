<script setup>

import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { ref } from 'vue';


const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>

<!-- <template>
	<header>
		<div class="wrapper">
			<nav>
				
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/signin">Sign In</RouterLink>
			</nav>
		</div>
	</header>
	<main class="mainApp">

		<div class="content">
			<RouterView />
		</div>
	</main>
</template> -->

<template>
	<header>
	  <nav class="navbar navbar-expand-lg">
		<div class="container-fluid">
		  <router-link to="/" class="navbar-brand">To do list</router-link>
		  <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
  
		  <div :class="{'collapse': !isNavbarOpen, 'navbar-collapse': true}" id="navbarsExample05">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			  <li class="nav-item">
				<router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
			  </li>
			  <li class="nav-item">
				<router-link to="/about" class="nav-link">About</router-link>
			  </li>
			  <li class="nav-item">
				<router-link to="/signin" class="nav-link">Sign In</router-link>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	</header>
	<main class="mainApp">
	  <div class="content">
		<router-view />
	  </div>
	</main>
  </template>
  
  
  

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

.navbar{
background-color: #44c9c8;
}
nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}
</style>
