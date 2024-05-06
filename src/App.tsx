import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from './shared/supabase/supabase';
import { logInUser } from './redux/modules/authSlice';
import { RootState } from './redux/config/configStore';
import Router from './route/Router';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

function App() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  console.log(isLoggedIn);

  /* 일단 signInWithKakao 함수가 실행됐을때 이 useEffect는 실행이 안됨 이 말은 authSlice에서 상태를 변경시키지 않는 다는말
  그렇다면  */
  /* useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      const userId = session?.user.id as string;
      const email = session?.user.email;
      if (event === 'INITIAL_SESSION' && session !== null) {
        dispatch(
          logInUser({
            userId,
            email,
          })
        );
        console.log('heelo');
      } else if (event === 'SIGNED_IN') {
        // handle sign in event
        dispatch(
          logInUser({
            userId,
            email,
          })
        );
      } else if (event === 'SIGNED_OUT') {
        dispatch(logOutUser());
      }
    });
    setIsLoading(false);
    console.log(data);
  }, []); */

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (data?.user !== null) {
          dispatch(
            logInUser({
              userId: data?.user?.id || null,
              email: data?.user?.email || null,
            })
          );
        }

        if (error) throw error;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading)
    return (
      <StContainer>
        <CircularProgress color="success" />
      </StContainer>
    );

  return (
    <>
      <Router />
    </>
  );
}

export default App;

const StContainer = styled.div`
  height: 93vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
