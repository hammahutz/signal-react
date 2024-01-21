export interface IGoal {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  completeDate?: Date;
}

export interface IGoalState {
  goals: IGoal[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IGoalStatus {
  goalId: string,
  isCompleted: boolean,
}