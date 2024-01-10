import React from "react";
import { useAppSelector } from "../hooks";
import { GoalItem } from "./GoalItem";
import { GoalForm } from ".";

const Goals: React.FC = () => {
  const { goals } = useAppSelector((state) => state.goal);
  return (
    <div>
      <GoalForm />
      <div>
        {goals.length > 0 ? (
          <>
            {goals.map((goal, index) => (
              <GoalItem
                goal={goal}
                key={index}
              />
            ))}
          </>
        ) : (
          <h3>You have not entered any goals ♥</h3>
        )}
      </div>
    </div>
  );
};

export default Goals;
