<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const email = ref("")
const password = ref("")
const name = ref("")

const userStore = useUserStore()

const createAccount = async () => {
  try {
    await userStore.createAccount(email.value, password.value, name.value)
  } catch (error) {
    console.error(error)
  }
}

const signIn = async () => {
  try {
    await userStore.signIn(email.value, password.value)
    console.log("trying login")
  } catch (error) {
    console.error(error)
  }
}

const seeCurrentUser = async () => {
  try {
    await userStore.seeCurrentUser()
  } catch (error) {
    console.error(error)
  }
}

const logout = async () => {
  try {
    await userStore.logout()
    console.log("logout OK")
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
	<main>
		<h1>Sign In View!</h1>
		<div class="inputContainer">
			<label class="userLabel">
				User Email:
				<input type="text" v-model="email" />
			</label>
			<label class="userLabel">
				Password:
				<input type="password" v-model="password" />
			</label>
		</div>

		<div class="inputContainer">
			<label class="userLabel">
				First Name:
				<input type="name" v-model="name" />
			</label>
		</div>

		<div class="buttonContainer">
			<button @click="createAccount">Create Account</button>
			<button @click="signIn">Sign In</button> 
			<button @click="seeCurrentUser">See Current User</button>
			<button @click="logout">Logout</button>
		</div>
	</main>
</template>

<style scoped>
.userLabel {
	padding: 6px 20px;
    background-color: #fff;
    margin: 20px 0;
    border-radius: 4px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>
