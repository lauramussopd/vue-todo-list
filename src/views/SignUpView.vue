<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore'

import navbarVue from '@/components/navbarVue.vue';

const email = ref("")
const password = ref("")
const name = ref("")
const buttonOff = ref(false)

const userStore = useUserStore()
const router = useRouter()

const createAccount = async () => {
  try {
    buttonOff.value = true;
    await userStore.createAccount(email.value, password.value, name.value);
    buttonOff.value = false;
    router.push({ name: 'tasks' });
  } catch (error) {
    console.error(error)
    buttonOff.value = false;
  }
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
        <!-- <div class="featured-image mb-3">
          <img src="../assets/bg.jpg" class="img-fluid" style="width: 250px;">
        </div> -->
        <p class="text-white fs-2" style="font-weight: 600;">To Do List</p>
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
              placeholder="Email address" required/>
          </div>
          <div class="input-group mb-1">
            <input type="text" v-model="name" class="form-control form-control-lg bg-light fs-6"
              placeholder="Name" required>
          </div>
          <div class="input-group mb-1">
            <input type="password" v-model="password" class="form-control form-control-lg bg-light fs-6"
              placeholder="Password" required>
          </div>
          <div class="input-group mb-5 d-flex justify-content-between">
          </div>
          <div class="input-group mb-3">
            <button type="submit" class="btn btn-lg w-100 fs-6" :disabled="buttonOff" >Create account</button>
          </div>
          
        </div>
      </form>
    </div>
  </div>
</template> 

<style scoped>
.buttonContainer {
  display: grid;
}

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
