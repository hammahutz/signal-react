export interface IGoal {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGoalState {
  goals: IGoal[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
