import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"
import axios, { AxiosError } from "axios"

// Get User form localStorage
const storedUser = localStorage.user

export interface RegisterUserData {
  name: string
  email: string
  password: string
  passwordreenter: string
}

interface AutState {
  user: RegisterUserData | null
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
}

const initialState: AutState = {
  user: storedUser ? (JSON.parse(storedUser) as RegisterUserData) : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user: RegisterUserData, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      return thunkAPI.rejectWithValue(axios.isAxiosError(error) ? error : error)
    }
  },
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state) => {state.isLoading = true})
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload as string
      state.user = null;
    })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
