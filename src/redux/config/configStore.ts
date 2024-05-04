import auth from '../../redux/modules/authSlice';
import { configureStore } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: { auth },
});
export default store;
