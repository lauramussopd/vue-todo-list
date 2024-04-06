import { supabase } from "@/api/supabase";

export const fetchActualUser = async () => {
  const { data } = await supabase.auth.getSession();
  return data?.session?.user || null;
};

export const createNewUser = async (email, password, name) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: name,
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }

  return user;
};

export const logIn = async (email, password) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  return user;
};

export const logOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }

  return undefined;
};
async function checkAuthentication() {
  try {
    const session = await supabase.auth.session();
    const user = session?.user || null;
    return user;
  } catch (error) {
    console.error(error);
  }
}
