<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const email = ref("");
const password = ref("");
const name = ref("");
const errorMessage = ref(""); 
const successLogIn = ref(false);
const loading = ref(false);

const userStore = useUserStore();
const router = useRouter();

const createAccount = async () => {
  try {
    await userStore.createAccount(email.value, password.value, name.value);
    router.push({ name: 'signup' });
  } catch (error) {
    console.error(error);
  }
}

const signIn = async () => {
  try {
    await userStore.signIn(email.value, password.value);

    successLogIn.value = true;

    setTimeout(() => {
      router.push({ name: 'about' });
      successLogIn.value = false;
    }, 1000)
  } catch (error) {
    console.error(error);
    errorMessage.value = "Incorrect email or password"; 
  }
}

const seeCurrentUser = async () => {
  try {
    await userStore.seeCurrentUser();
  } catch (error) {
    console.error(error);
  }
}

const logout = async () => {
  try {
    await userStore.logout();
    console.log("logout OK");
  } catch (error) {
    console.error(error);
  }
}

watch(() => email.value, () => {
  if (email.value !== '') {
    errorMessage.value = ''
  }
})

watch(() => password.value, () => {
  if (password.value !== '') {
    errorMessage.value = ''
  }
})
</script>


<template>

  <!----------------------- Main Container -------------------------->

  <div class="container d-flex justify-content-center align-items-center min-vh-100">

    <!----------------------- Login Container -------------------------->

    <div class="row border rounded-5 p-3 bg-white shadow box-area">

      <!--------------------------- Left Box ----------------------------->

      <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
        style="background: var(--dark-color);">
        <p class="text-white fs-2" style="font-weight: 600;">To Do List</p>
        <small class="text-white text-wrap text-center" style="width: 17rem;">Be more organized</small>
      </div>

      <!-------------------- ------ Right Box ---------------------------->

      <div class="col-md-6 right-box">
        <div class="row align-items-center">
          <div class="header-text mb-4">
            <h2>Hello, again</h2>
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
          <div class="input-group mb-5">
            <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
              {{ errorMessage }}
              
            </div>
          </div>
          <div class="input-group mb-5 d-flex justify-content-between">
          </div>
          <div class="input-group mb-3">
            <button :class="`btn btn-lg w-100 fs-6 ${successLogIn ? 'success' : ''}`" :disabled="errorMessage !== ''" @click="signIn">Login</button>
          </div>
          <div class="row">
            <small>Don't have account? <a href="/signup" class="a-signup" @click="createAccount">Sign Up</a></small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttonContainer {
  display: grid;
}

button {
  background-color: var(--primary-color);
  border: none;
  color: #fff;
}
button:disabled {
  background-color: #44c9c977;

}

button.success {
  background-color: var(--dark-color);
}

.a-signup {
  text-decoration: underline;
  color: var(--dark-color);
}

/*------------ Login container ------------*/
.box-area {
  width: 930px;
}

/*------------ Right box ------------*/
.right-box {
  padding: 40px 30px 40px 40px;
}

.right-box .alert {
  position: absolute;
  top: 12px;
  width: calc(100% - 24px);
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
