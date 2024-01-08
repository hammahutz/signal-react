import React, { useEffect } from "react";
import { AuthProvider, GoalForm, Spinner } from "../components";
import { useAppSelector, useAppDispatch, useLogin } from "../hooks";
import { actions } from "../context";

const Dashboard: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { isError, isLoading, message } = useAppSelector((state) => state.goal);
  const dispatch = useAppDispatch();
  const { getGoals, resetGoals } = actions.goal;

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
