<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore'

import navbarVue from '@/components/navbarVue.vue';

const email = ref("")
const password = ref("")
const name = ref("")

const userStore = useUserStore()
const router = useRouter()

const createAccount = async () => {
  try {
    await userStore.createAccount(email.value, password.value, name.value);
    router.push({ name: '' });
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

      <div class="col-md-6 right-box">
        <div class="row align-items-center">
          <div class="header-text mb-4">
            <h2>Welcome!</h2>
            <p>Let’s begin the adventure</p>
          </div>
          <div class="input-group mb-1">
            <input type="text" v-model="email" class="form-control form-control-lg bg-light fs-6"
              placeholder="Email address" />
          </div>
          
          <div class="input-group mb-1">
            <input type="text" v-model="name" class="form-control form-control-lg bg-light fs-6"
              placeholder="Name">
          </div>
          <div class="input-group mb-1">
            <input type="password" v-model="password" class="form-control form-control-lg bg-light fs-6"
              placeholder="Password">
          </div>
          <div class="input-group mb-5 d-flex justify-content-between">
          </div>
          <div class="input-group mb-3">
            <button class="btn btn-lg w-100 fs-6" @click="createAccount">Create account</button>
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
