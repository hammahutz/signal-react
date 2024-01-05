import React from "react";
import { AuthProvider } from "../components";

const Dashboard: React.FC = () => {
  return (
    <AuthProvider>
      <h1>Dash</h1>
    </AuthProvider>
  );
};

export default Dashboard;
