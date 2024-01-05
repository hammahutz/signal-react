import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import axios from "axios";

// Get User form localStorage
const storedUser = localStorage.user;

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  passwordreenter: string;
  token: string;
}

interface LoginUserData {
  email: string;
  password: string;
}

interface AutState {
  user: RegisterUserData | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: AutState = {
  user: storedUser ? (JSON.parse(storedUser) as RegisterUserData) : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const register = createAsyncThunk("auth/register", async (user: RegisterUserData, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(axios.isAxiosError(error) ? error : error);
  }
});

const login = createAsyncThunk("auth/login", async (user: LoginUserData, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(axios.isAxiosError(error) ? error : error);
  }
});

const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload as string;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload as string;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const actions = { ...authSlice.actions, login, logout, register };
export const reducer = authSlice.reducer;
export type { RegisterUserData, LoginUserData };
