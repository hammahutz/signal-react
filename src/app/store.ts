import { configureStore } from "@reduxjs/toolkit";
import * as slices from "../features";

export const store = configureStore({
  reducer: {
    auth: slices.auth.reducer,
    form: slices.form.reducer,
    goal: slices.goal.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
