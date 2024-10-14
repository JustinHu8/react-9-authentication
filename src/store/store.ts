import { configureStore } from '@reduxjs/toolkit';
import courseSlice from '../features/courses/courseSlice';

const store = configureStore({
  reducer: {
    coursesState: courseSlice,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;