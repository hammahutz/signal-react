import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { goalService } from "../services";
import { RootState, IGoal, IGoalState, IGoalStatus } from "../interfaces";

const initialState: IGoalState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const getGoals = createAsyncThunk<IGoal[] | Error, undefined, { state: RootState }>(
  "goal/get",
  async (_: undefined, thunkAPI) => {
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

const createGoal = createAsyncThunk<IGoal | Error, string, { state: RootState }>(
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

const deleteGoal = createAsyncThunk<string | Error, string, { state: RootState }>(
  "goal/delete",
  async (id: string, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      return await goalService.deleteGoal(id, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(axios.isAxiosError(error) ? error : error);
    }
  }
);

const setCompletion = createAsyncThunk<IGoal | Error, IGoalStatus, { state: RootState }>(
  "goal/setStatus",
  async (goalStatus, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      if (!token) {
        return thunkAPI.rejectWithValue("No token");
      }
      return await goalService.setGoalStatus(goalStatus, token);
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
        state.isLoading = false;
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
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = JSON.stringify(action.payload as Error);
      })
      .addCase(createGoal.pending, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        const goal = action.payload as IGoal;
        state.goals.push(goal);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = JSON.stringify(action.payload as Error);
      })
      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.goals = state.goals.filter((goal) => goal._id != action.payload);
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = JSON.stringify(action.payload as Error);
      })
      .addCase(setCompletion.pending, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(setCompletion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        const updateGoal = action.payload as IGoal;
        const prevGoalIndex = state.goals.findIndex(g => g._id === updateGoal._id)

        state.goals[prevGoalIndex].completeDate = updateGoal.completeDate;
      })
      .addCase(setCompletion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = JSON.stringify(action.payload as Error);
      });
  },
});

export const actions = { ...goalSlice.actions, createGoal, getGoals, deleteGoal, setCompletion };
export const reducer = goalSlice.reducer;
