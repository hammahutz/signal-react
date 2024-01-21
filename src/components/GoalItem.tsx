import React, { useEffect, useState } from "react";
import { IGoal, IGoalStatus } from "../interfaces";
import { useAppDispatch } from "../hooks";
import { actions } from "../context";
import { FaCheck, FaPen, FaTrash } from "react-icons/fa";

interface Prop {
  goal: IGoal;
}

const GoalItem: React.FC<Prop> = ({ goal }) => {
  const { deleteGoal, setCompletion } = actions.goal;
  const dispatch = useAppDispatch();
  const [style, setStyle] = useState("");
  const [goalStatus, setGoalStatus] = useState({} as IGoalStatus);

  useEffect(() => {
    if (goal.completeDate) {
      setStyle("line-through text-neutral");
    } else {
      setStyle("");
    }

    setGoalStatus({ goalId: goal._id, isCompleted: goal.completeDate ? false : true });
    console.log("GoalStatus", goalStatus);
  }, [goal]);

  return (
    <>
      <div className="card card-bordered w-96 bg-base-100 shadow-xl relative">
        <div className="card-body">
          <h2 className={`card-title ${style}`}>{goal.text}</h2>
          <span className={`text-xs ${style}`}>Last updated {new Date(goal.updatedAt).toLocaleString()}</span>
          <span className={`text-xs ${style}`}>Created {new Date(goal.createdAt).toLocaleString()}</span>
          {goal.completeDate && (
            <div className="badge badge-success gap-2 absolute top-16 rotate-12 opacity-30">
              {`Completed ${new Date(goal.completeDate).toLocaleString()}`}
            </div>
          )}

          <div className="card-actions justify-end">
            <button
              className="btn btn-outline btn-success"
              onClick={() => dispatch(setCompletion(goalStatus))}>
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
