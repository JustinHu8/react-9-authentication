import { configureStore } from '@reduxjs/toolkit';
import courseSlice from '../features/courses/courseSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    coursesState: courseSlice,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;