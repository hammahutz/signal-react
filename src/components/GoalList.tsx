import React from "react";
import { useAppSelector } from "../hooks";
import { GoalForm, GoalItem } from ".";

const GoalList: React.FC = () => {
  const { goals } = useAppSelector((state) => state.goal);
  return (
    <div>
      <div className="flex flex-col gap-4">
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

export default GoalList;
