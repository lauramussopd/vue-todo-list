<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { supabase } from '@/api/supabase'
const userStore = useUserStore()

//connect inputs
const email = ref('');
const password = ref('');
const name = ref('');

//create account
async function createAccount() {
	const { data, error	} = await supabase.auth.signUp({ 
		email: email.value,
		password: password.value, 
		options: {
			data: {
				first_name: name.value
			}
		}
	})
	if (error) {
		console.log(error)
	}
	else {
		console.log(data)
	}
	
}

const signIn = () => {
	userStore.signIn(email.value, password.value)
	console.log("signIn")
	console.log(email.value, password.value)
}

//login
/*async function login() {
const { data, error } = await supabase.auth.signInWithPassword({
	email: email.value,
		password: password.value
	})
	if (error) {
		console.log(error)
	}
	else {
		console.log(data)
	}
	console.log("login")
}*/

//see current user account
async function seeCurrentUser() {
	const localUser = await supabase.auth.getSession();
	console.log(localUser)
	console.log("see current user")
}

//logout
async function logout() {
const { error } = await supabase.auth.signOut();
if (error) {
	console.log(error)
}
else {
	console.log("logout succeded")
}
	console.log("logout")
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

		<div class="inputContainer">
			<label>
				First Name:
				<input type="name" v-model="name" />
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

<style scoped>
button{
	display: block;
}
</style>