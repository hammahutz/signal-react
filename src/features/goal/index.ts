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

const getGoals = createAsyncThunk<string[] | Error, string, { state: RootState }>(
  "goal/get",
  async (_: string, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      return await goalService.getGoals(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(axios.isAxiosError(error) ? error : error);
    }
  }
);

const createGoal = createAsyncThunk<string | Error, string, { state: RootState }>(
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
      .addCase(getGoals.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload instanceof Error) {
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload.message;
        } else {
          state.isSuccess = true;
          state.isError = false;
          state.goals = action.payload;
        }
      })
      // .addCase(getGoals.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = JSON.stringify(action.payload);
      // })
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        const goal = action.payload as string;
        state.goals.push(goal);
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
