import { useDispatch } from 'react-redux';
import { supabase } from '../shared/supabase/supabase';

export async function signInWithKakao() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: import.meta.env.VITE_REDIRECT_TO,
    },
  });

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
