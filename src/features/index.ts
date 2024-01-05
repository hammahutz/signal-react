import * as auth from "./auth";
import * as form from "./form";
import * as goal from "./goal";

import type { RegisterUserData, LoginUserData } from "./auth";
import { IndexValuePair } from "./form";
import { IGoalState } from "./goal";

export { auth, form, goal };
export type { RegisterUserData, LoginUserData, IndexValuePair, IGoalState };
