// import { useQuery } from '@tanstack/react-query';
import Main from './Pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from './shared/supabase/supabase';
import { logInUser, logOutUser } from './redux/modules/authSlice';
import { RootState } from './redux/config/configStore';
import ProtectedRoute from './components/ProtectedRoute';
import { Session, User } from '@supabase/supabase-js';

// import Layout from './components/Layout/Layout';
// import { getUserDataById } from './api/auth';

function App() {
  const { userId, isLoggedIn } = useSelector((state: RootState) => state.auth);
  // const [session, setSession] = useState<Session | null>();
  // const [user, setUser] = useState<User>();
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const dispatch = useDispatch();
  console.log(isLoggedIn);
  // const localdata = localStorage.getItem(
  //   import.meta.env.VITE_LOCALSTORAGE_KEY as string
  // ) as string;
  // console.log(localdata);
  // const { data: user } = useQuery({
  //   queryKey: ['user', userId],
  //   queryFn: () => getUserDataById(userId),
  //   enabled: !!userId,
  // });
  // console.log(us er);
  // const abc = async () => {

  useEffect(() => {
    // const setData = async () => {
    //   const {
    //     data: { session },
    //     error,
    //   } = await supabase.auth.getSession();
    //   setSession(session);
    //   setUser(session?.user);
    //   setIsLoggedIn(true);
    //   console.log(error);
    // };
    // console.log(session);
    // console.log(user);
    // console.log(user);

    supabase.auth.onAuthStateChange((event, session) => {
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
        // setIsLoggedIn(false);
      }
    });
    // setData();
  }, [dispatch]);

  // if (!isLoggedIn) {
  //   return (
  //     <>
  //       {console.log('hello')}
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/login" element={<Login />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </>
  //   );
  // }

  return (
    // 문제 : 최초에 isLoggedIn이 true일때만 Main으로 접속가능 근데 최초에 접속 자체를 Main으로 하기 때문에 안되는 것
    // 따라서 맨처음 사이트에 접속시 리다이렉트시켜 로그인페이지로 보여줘야함
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Main userId={userId} />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Main userId={userId} />} />
              <Route path="/login" element={<Login />} />
            </>
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main userId={userId} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/* 현재 로컬스토리지에 잠깐 set이 됐다가 사라짐 
  set이 안되기 때문에 isLoggedIn 상태변경이 안됨 혹은 됐다가 바로 재변경?
  재변경이 됐다는 소리는 곧바로 signOut이 일어났다는 소리인가? \\
  */

/* 
  1. 해당 컴포넌트에서 useEffect는 최초에 한번만 실행 
  2. 만일 로그인 버튼이 눌렸다면 
*/
