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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
