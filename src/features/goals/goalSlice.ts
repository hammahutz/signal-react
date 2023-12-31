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

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
