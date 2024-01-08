import * as auth from "./authSlice";
import * as form from "./formSlice";
import * as goal from "./goalSlice";

export const reducers = {
  auth: auth.reducer,
  form: form.reducer,
  goal: goal.reducer,
};

export const actions = {
  auth: auth.actions,
  form: form.actions,
  goal: goal.actions,
};
