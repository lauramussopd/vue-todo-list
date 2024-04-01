<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

//connect inputs
const email = ref('')
const password = ref('')

//create account
function createAccount() {
	console.log("create account")
}

//login
function login() {
	console.log("login")
}

//see current user account
function seeCurrentUser() {
	console.log("see current user account")
}

//logout
function logout() {
	console.log("logout")
}
const signIn = () => {
	userStore.signIn(email.value, password.value)
	console.log("signIn")
}


</script>

<template>
	<main>
		<h1>Sign In View!</h1>
		<div class="inputContainer">
			<label>
				User Email:
				<input type="text" v-model="email" />
			</label>
			<label>
				Password:
				<input type="password" v-model="password" />
			</label>
		</div>
		<div class="buttonContainer">
			<button @click="createAccount">Create Account</button>
			<button @click="signIn">Sign In</button>
			<button @click="login">Login</button>
			<button @click="seeCurrentUser">See Current User</button>
			<button @click="logout">Logout</button>
		</div>
		

	</main>
</template>

<style scoped></style>