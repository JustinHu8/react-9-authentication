import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    status: 'idle',
    error: null,
  };

  // Axios instance with credentials enabled
const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true, // Enable sending cookies
});
  
  // Async thunk for login API call
  export const login = createAsyncThunk(
    'auth/loginUser',
    async (credentials: { username: string; password: string }, { rejectWithValue }) => {
      try {
        // if response is 401, rejectWithValue will be called with the error message
        const response = await api.post('login', credentials);
        if (response.status === 401) {
            return rejectWithValue(response.data.message);
        }
        if (response.status !== 200) {
            return rejectWithValue('Failed to login');
        }
        return response.data.message;
      } catch (error: any) {
        return rejectWithValue(error.response.data.message || 'Login failed');
      }
    }
  );

  export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.post('/logout');
        if (response.status !== 200) {
          return rejectWithValue('Failed to logout');
        }
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data.message || 'Logout failed');
      }
  });
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuthenticated: (state) => {
        state.isAuthenticated = true;
      },
      clearAuthentication: (state) => {
        state.isAuthenticated = false;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(login.fulfilled, (state) => {
          state.status = 'succeeded';
          state.isAuthenticated = true;
        })
        .addCase(login.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload as string;
        })
        .addCase(logout.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(logout.fulfilled, (state) => {
          state.status = 'idle';
          state.isAuthenticated = false;
        })
        .addCase(logout.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload as string;
        })
    },
  });
  
export const { setAuthenticated, clearAuthentication } = authSlice.actions;
export default authSlice.reducer;
