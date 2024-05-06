import { createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  isLoggedIn: boolean;
  userId: string | null;
  email: string | null;
}

const session = JSON.parse(
  localStorage.getItem(
    import.meta.env.VITE_LOCALSTORAGE_KEY as string
  ) as string
);
console.log(session);

const isLocalStorage = !!localStorage.getItem(
  import.meta.env.VITE_LOCALSTORAGE_KEY as string
);

const initialState: initialStateType = {
  isLoggedIn: false,
  userId: '',
  email: '',
};

console.log(isLocalStorage);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      const { userId, email } = action.payload;
      console.log(action);

      state.isLoggedIn = true;
      state.userId = userId;
      state.email = email;
      console.log(state.email);
      console.log(state.isLoggedIn);
      console.log(state.userId);
    },
    logOutUser: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.email = null;
    },
  },
});

export const { logInUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
