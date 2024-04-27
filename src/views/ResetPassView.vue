<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore'


import navbarVue from '@/components/navbarVue.vue';


</script>

<template>
  <navbarVue />
  <!----------------------- Main Container -------------------------->

  <div class="container d-flex justify-content-center align-items-center min-vh-100">

    <!----------------------- Login Container -------------------------->

    <div class="row border rounded-5 p-3 bg-white shadow box-area">

      <form class="col-md-12" @submit.prevent="createAccount">
        <div class="row align-items-center">
          <div class="header-text mb-4">
            <h2>Reset your password</h2>
          </div>
          <div class="input-group mb-1">
            <input type="email" v-model="email" class="form-control form-control-lg bg-light fs-6"
              placeholder="Email address" required />
          </div>
          <div class="input-group mb-1">
            <input type="password" v-model="password" class="form-control form-control-lg bg-light fs-6"
              placeholder="Password" required>
          </div>
          <div class="input-group mb-1">
            <input type="password" v-model="password" class="form-control form-control-lg bg-light fs-6"
              placeholder="Repeat your password" required>
          </div>
          <div class="input-group mb-3">
            <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
          </div>
          <div class="input-group mb-3">
            <button type="submit" class="btn btn-lg w-100 fs-6" :disabled="buttonOff">Reset Password</button>
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
.btn:hover {
    color: white;
    background-color: var(--primary-color);
    border-color: var(--bs-btn-hover-border-color);
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
  /* position: absolute; */
  top: -64px;
  height: 44px;
  text-align: center;
  padding: 10px 12px;
  /* width: calc(100% - 24px); */
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
