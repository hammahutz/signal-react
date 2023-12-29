import { configureStore } from "@reduxjs/toolkit"
import {authSlice} from "../features/auth/authSlice"
import {formSlice} from "../features/form/formSlice"

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    auth: authSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch