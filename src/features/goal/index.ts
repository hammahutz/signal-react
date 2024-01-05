import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IGoalState {
  goals: [];
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

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    resetGoals: () => initialState,
  },
});

export const actions = { ...goalSlice.actions };
export const reducer = goalSlice.reducer;
export type { IGoalState };
