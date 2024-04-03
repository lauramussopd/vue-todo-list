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

<!-- <template>
	<main class="container">
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
</template> -->

<template>

  <!----------------------- Main Container -------------------------->
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <!----------------------- Login Container -------------------------->
    <div class="row border rounded-5 p-3 bg-white shadow box-area">
      <!--------------------------- Left Box ----------------------------->
      <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
        style="background: #44c9c8;">
        <div class="featured-image mb-3">
          <img src="../assets/gumball.png" class="img-fluid" style="width: 250px;">
        </div>
        <p class="text-white fs-2" style="font-family: 'Courier New', Courier, monospace; font-weight: 600;">Be Verified
        </p>
        <small class="text-white text-wrap text-center"
          style="width: 17rem;font-family: 'Courier New', Courier, monospace;">Join experienced Designers on this
          platform.</small>
      </div>
      <!-------------------- ------ Right Box ---------------------------->

      <div class="col-md-6 right-box">
        <div class="row align-items-center">
          <div class="header-text mb-4">
            <h2>Hello,Again</h2>
            <p>We are happy to have you back.</p>
          </div>
          <div class="input-group mb-3">
            <input type="text" v-model="email" class="form-control form-control-lg bg-light fs-6"
              placeholder="Email address" />
          </div>
          <div class="input-group mb-1">
            <input type="password" v-model="password" class="form-control form-control-lg bg-light fs-6"
              placeholder="Password">
          </div>
          <div class="input-group mb-5 d-flex justify-content-between">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="formCheck">
              <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
            </div>
            <div class="forgot">
              <small><a href="#">Forgot Password?</a></small>
            </div>
          </div>
          <div class="input-group mb-3">
            <button class="btn btn-lg w-100 fs-6 btn-info" @click="signIn">Login</button>
          </div>
          <div class="row">
            <small>Don't have account? <a href="#" @click="createAccount">Sign Up</a></small>
          </div>
          <div class="buttonContainer">
            <button @click="seeCurrentUser">See Current User</button>
            <button @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttonContainer{
  display: grid;
}
/* .userLabel {
  padding: 6px 20px;
  background-color: #fff;
  margin: 20px 0;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
} */

/* button {
  background-color: #44c9c8;
  border: none;
  color: #fff;
} */

/*------------ Login container ------------*/
.box-area {
  width: 930px;
}

/*------------ Right box ------------*/
.right-box {
  padding: 40px 30px 40px 40px;
}

/*------------ Custom Placeholder ------------*/
::placeholder {
  font-size: 16px;
}

.rounded-4 {
  border-radius: 20px;
}

.rounded-5 {
  border-radius: 30px;
}

/*------------ For small screens------------*/
@media only screen and (max-width: 768px) {
  .box-area {
    margin: 0 10px;
  }

  .left-box {
    height: 100px;
    overflow: hidden;
  }

  .right-box {
    padding: 20px;
  }
}
</style>
