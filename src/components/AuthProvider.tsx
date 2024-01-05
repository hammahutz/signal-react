import React from "react";
import { useLogin } from "../hooks";

interface Prop {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Prop> = ({ children }) => {
  useLogin();
  return <>{children}</>;
};

export default AuthProvider;
