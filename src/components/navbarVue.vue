<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const router = useRouter()
const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

const _handleLogOut = () => {
    userStore.logout()
        .then(() => {
            router.push({ name: 'signin' }); // Navigare alla pagina di accesso dopo il logout
        })
        .catch(err => {
            console.error(err);
        });
}

</script>

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
              <li class="nav-item">
                <button @click="_handleLogOut">Log Out</button>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	</header>
  </template>
  
  
  

<style scoped>

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
    color: #fff;
}


.nav-link, .navbar-brand{
    color: #fff;
}
.navbar {
	width: 100vw;
	background-color: #44c9c8;
    color: #fff;
}
/* nav a.router-link-exact-active {
	color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
	background-color: transparent;
} */

</style>
