import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "@/api/supabase";
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
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            first_name: name,
          },
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function signUp(email, password) {
    try {
      user.value = await createNewUser(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async function signIn(email, password) {
    try {
      user.value = await logIn(email, password);
      console.log("trying login");
    } catch (error) {
      console.error(error);
    }
  }

  async function seeCurrentUser() {
    try {
      const localUser = await supabase.auth.getSession();
      console.log(localUser);
      console.log("see current user");
    } catch (error) {
      console.log(error);
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
    signUp,
    signIn,
    seeCurrentUser,
    logout,
    isAuthenticated,
  };
});
