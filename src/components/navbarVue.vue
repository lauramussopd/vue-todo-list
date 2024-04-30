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
            router.push({ name: 'signin' });
        })
        .catch(err => {
            console.error(err);
        });
}

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <router-link to="" class="navbar-brand">To do list</router-link>
                <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarsExample05"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div :class="{ 'collapse': !isNavbarOpen, 'navbar-collapse': true }">
                    <ul class="navbar-nav me-auto m-0">
                        <li class="nav-item" v-if="!userStore.isAuthenticated">
                            <router-link to="/signin" class="nav-link">Sign In</router-link>
                        </li>
                        <li class="nav-item d-flex justify-content-center align-items-center" v-else>
                            <button @click="_handleLogOut" class="nav-link">Log Out</button>
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

.nav-link,
.navbar-brand {
    color: #fff;
    text-align: center;
}

.nav-link * {
    width: 100%;
}

.navbar {
    width: 100vw;
    background-color: #44c9c8;
    color: #fff;
}

.navbar-toggler {
    border: none;
}

.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: none;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255)' stroke-width='1' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
</style>
