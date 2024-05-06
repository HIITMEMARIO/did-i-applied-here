import { supabase } from '../shared/supabase/supabase';

export async function signInWithKakao() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: import.meta.env.VITE_REDIRECT_TO,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  console.log(data);

  if (error) throw error.message;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error.message;
}

export const getUserDataById = async (userId: string | null) => {
  const { data: user, error } = await supabase
    .from('companies')
    .select('*')
    .eq('user_id', userId)
    .select();
  if (error) {
    throw error;
  }
  return user;
};

export const deleteData = async (id: string) => {
  const { error } = await supabase.from('companies').delete().eq('id', id);
  if (error) {
    throw error.message;
  }
};
