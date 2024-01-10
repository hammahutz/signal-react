import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { actions } from "../context";

const GoalForm: React.FC = () => {
  const [text, setText] = useState("");
  const { goals } = useAppSelector((state) => state.goal);
  const dispatch = useAppDispatch();
  const { createGoal } = actions.goal;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
    dispatch(createGoal(text));
    setText("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Type your goal here"
            className="input input-bordered w-full max-w-xs"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button
          className="btn"
          type="submit">
          Add
        </button>
      </form>
      {goals.length > 0 ? (
        <>
          {goals.map((goal) => (
            <div key={goal._id}>{goal.text}</div>
          ))}
        </>
      ) : (
        <h3>You have not entered any goals ♥</h3>
      )}
    </>
  );
};

export { GoalForm };
