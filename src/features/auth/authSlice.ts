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
  
  // Async thunk for login API call
  export const login = createAsyncThunk(
    'auth/loginUser',
    async (credentials: { username: string; password: string }, { rejectWithValue }) => {
      try {
        // if response is 401, rejectWithValue will be called with the error message
        const response = await axios.post('http://localhost:3000/login', credentials);
        if (response.status === 401) {
            return rejectWithValue(response.data.message);
        }
        if (response.status !== 200) {
            return rejectWithValue('Failed to login');
        }
        return response.data.token; // Assuming the API response returns { token: "your_jwt_token" }
      } catch (error: any) {
        return rejectWithValue(error.response.data.message || 'Login failed');
      }
    }
  );
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout: (state) => {
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem('token');
      },
      setAuthenticated: (state) => {
        state.isAuthenticated = true;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.isAuthenticated = true;
          state.token = action.payload;
          localStorage.setItem('token', action.payload); // Store token locally
        })
        .addCase(login.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload as string;
        });
    },
  });
  
export const { logout, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
