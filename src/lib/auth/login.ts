import { supabase } from "@/lib/supabaseClient";

export async function loginWithEmailAndPassword(
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}
