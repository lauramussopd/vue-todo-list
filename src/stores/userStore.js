import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { fetchActualUser, createNewUser, logIn, logOut } from "@/api/userApi";

export const useUserStore = defineStore("user", () => {
  // State
  const user = ref(undefined);

  // Getter
  const isAuthenticated = computed(() => {
    return user.value !== undefined && user.value !== null;
  });

  // Actions
  async function fetchUser() {
    try {
      user.value = await fetchActualUser();
    } catch (error) {
      if (error.code === "401") {
        user.value = null;
        return;
      }
    }
  }

  async function createAccount(email, password, name) {
    user.value = await createNewUser(email, password, name);
  }

  async function signIn(email, password) {
    try {
      user.value = await logIn(email, password);
      console.log("trying login");
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      user.value = await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    // State
    user,

    // Actions
    createAccount,
    fetchUser,
    signIn,
    logout,
    isAuthenticated,
  };
});
