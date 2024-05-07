import { createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  isLoggedIn: boolean;
  userId: string | null;
  email: string | null;
}

const initialState: initialStateType = {
  isLoggedIn: false,
  userId: '',
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      const { userId, email } = action.payload;
      state.isLoggedIn = true;
      state.userId = userId;
      state.email = email;
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
