import React from "react";
import { IGoal } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { actions } from "../context";

interface Prop {
  goal: IGoal;
}

const GoalItem: React.FC<Prop> = ({ goal }) => {
  const { deleteGoal } = actions.goal;
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>{new Date(goal.createdAt).toLocaleDateString()}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))}>X</button>
    </div>
  );
};

export { GoalItem };
