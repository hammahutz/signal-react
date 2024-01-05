import React from "react";
import { AuthProvider, GoalForm } from "../components";
import { useAppSelector } from "../hooks";

const Dashboard: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

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
