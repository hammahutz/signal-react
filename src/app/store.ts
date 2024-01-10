import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../context";

const { auth, form, goal } = reducers;
export const store = configureStore({
  reducer: {
    auth,
    form,
    goal,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
