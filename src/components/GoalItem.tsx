import React from "react";
import { IGoal } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { actions } from "../context";
import { FaCheck, FaPen, FaTrash } from "react-icons/fa";

interface Prop {
  goal: IGoal;
}

const GoalItem: React.FC<Prop> = ({ goal }) => {
  const { deleteGoal } = actions.goal;
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="card card-bordered w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{goal.text}</h2>
          <p className="text-xs">Created at {new Date(goal.createdAt).toLocaleString()}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-success">
              <FaCheck />
            </button>
            <button className="btn btn-outline btn-primary">
              <FaPen />
            </button>
            <button
              className="btn btn-outline btn-error"
              onClick={() => dispatch(deleteGoal(goal._id))}>
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalItem;
