import { authSlice } from "./auth/authSlice";
import { formSlice } from "./form/formSlice";
import { goalSlice } from "./goals/goalSlice";

const reducers = {
  auth: authSlice.reducer,
  form: formSlice.reducer,
  goal: goalSlice.reducer,
};

export { reducers };
