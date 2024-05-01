<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore'


import navbarVue from '@/components/navbarVue.vue';

const email = ref("")
const password = ref("")
const name = ref("")
const buttonOff = ref(false)
const errorMessage = ref("");

const userStore = useUserStore()
const router = useRouter()

const createAccount = async () => {
  try {
    buttonOff.value = true;
    if (password.value.length < 6) {
      errorMessage.value = "Password must be at least 6 characters long.";
      throw new Error("Password too short");
    }
    await userStore.createAccount(email.value, password.value, name.value);
    buttonOff.value = false;
    router.push({ name: 'tasks' });
  } catch (error) {
    console.error(error);
    errorMessage.value = error.message;
    buttonOff.value = false;
  }
}

const resetErrorMessage = () => {
  errorMessage.value = "";
}

const seeCurrentUser = async () => {
  try {
    await userStore.seeCurrentUser()
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
<navbarVue />
  <!----------------------- Main Container -------------------------->

  <div class="container d-flex justify-content-center align-items-center min-vh-100">

    <!----------------------- Login Container -------------------------->

     <div class="row border rounded-5 p-3 bg-white shadow box-area"> 

      <!--------------------------- Left Box ----------------------------->
      <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
        style="background: var(--dark-color);">
        <p class="text-white fs-2" style="font-weight: 600;">Remember Me!</p>
        <small class="text-white text-wrap text-center" style="width: 17rem;">Be more organized</small>
      </div>
      <!-------------------- ------ Right Box ---------------------------->

      <form class="col-md-6 right-box" @submit.prevent="createAccount">
        <div class="row align-items-center">
          <div class="header-text mb-4">
            <h2>Welcome!</h2>
            <p>Let’s begin the adventure</p>
          </div>
            <div class="input-group mb-1">
            <input type="email" v-model="email" class="form-control form-control-lg bg-light fs-6"
              placeholder="Email address" required @input="resetErrorMessage"/>
          </div>
          <div class="input-group mb-1">
            <input type="text" v-model="name" class="form-control form-control-lg bg-light fs-6"
              placeholder="Name" required @input="resetErrorMessage">
          </div>
          <div class="input-group mb-1">
            <input type="password" v-model="password" class="form-control form-control-lg bg-light fs-6"
              placeholder="Password" required @input="resetErrorMessage">
          </div>
          <div class="input-group mb-5 d-flex justify-content-between">
          </div>
          <div class="input-group mb-3">
            <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
          </div>
          <div class="input-group mb-3">
            <button type="submit" class="btn btn-lg w-100 fs-6" :disabled="errorMessage !== ''" >Create account</button>
          </div>
          <div class="row">
            <small>Already have an account? <router-link to="/signin" class="a-signin">Sign In</router-link>
            </small>
          </div>
          
        </div>
      </form>
    </div>
  </div>
</template> 

<style scoped>

.bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.buttonContainer {
  display: grid;
}

button {
  background-color: var(--primary-color);
  border: none;
  color: #fff;
}

.btn:hover {
  color: #fff;
  background-color: var(--dark-color);
  border-color: var(--bs-btn-hover-border-color);
}

button:disabled {
  background-color: #44c9c977;
}

.box-area {
  width: 930px;
}

.right-box {
  padding: 40px 30px 40px 40px;
}

::placeholder {
  font-size: 16px;
}

.rounded-4 {
  border-radius: 20px;
}

.rounded-5 {
  border-radius: 30px;
}



.right-box .alert {
  position: absolute;
    top: -48px;
    height: 44px;
    text-align: center;
    padding: 10px 12px;
    width: calc(100% - 24px);
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
