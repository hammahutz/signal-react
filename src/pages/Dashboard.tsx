import React, { useEffect, useState } from "react";
import { AuthProvider, GoalForm, Spinner } from "../components";
import { useAppSelector, useAppDispatch, useLogin } from "../hooks";
import { goal } from "../features";

const Dashboard: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { goals, isError, isLoading, isSuccess, message } = useAppSelector((state) => state.goal);
  const dispatch = useAppDispatch();
  const { getGoals, resetGoals } = goal.actions;

  useLogin();

  useEffect(() => {
    if (isError) {
      console.log(message);
    } else {
      dispatch(getGoals());
    }

    return () => {
      dispatch(resetGoals());
    };
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <AuthProvider>
      <article className="w-full flex flex-col justify-center items-center">
        <section className="bg-neutral rounded-lg p-4">
          <h1 className="text text-primary">Welcome {user && user.name}!</h1>
          <h2 className="text-2xl">Goals DashBoard</h2>
        </section>

        <GoalForm />
      </article>
    </AuthProvider>
  );

   };

export default Dashboard;
