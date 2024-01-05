import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import goalService from "./goalService";
import { RootState } from "../../app/store";

interface IGoalState {
  goals: string[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
const initialState: IGoalState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const createGoal = createAsyncThunk<string, string, { state: RootState }>(
  "goal/create",
  async (text: string, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      return await goalService.createGoal(text, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(axios.isAxiosError(error) ? error : error);
    }
  }
);

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    resetGoals: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.goals.push(action.payload);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = JSON.stringify(action.payload);
      });
  },
});

export const actions = { ...goalSlice.actions, createGoal };
export const reducer = goalSlice.reducer;
export type { IGoalState };
