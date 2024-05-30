import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "./shared/supabase/supabase";
import { logInUser } from "./redux/modules/authSlice";
import Router from "./route/Router";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

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
  }, [dispatch]);

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
