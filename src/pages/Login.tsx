import React, { useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../hooks";
import { form, auth, LoginUserData } from "../features";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Spinner, UserForm, IInputField } from "../components";

const Login: React.FC = () => {
  const formState = useAppSelector((state) => state.form);
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isFormSubmitted} = form.actions
  const {login, logout, reset} = auth.actions

  const inputFields = [{ name: "Email" }, { name: "Password", type: "password" }] as IInputField[];


  useEffect(() => {
    if (!formState.isSubmitted) {
      return;
    }
    dispatch(isFormSubmitted(false));
    const userData = formState.submitData as LoginUserData;
    if (!userData.email || !userData.password) {
      toast.error("Please fill the form");
      return;
    }
    dispatch(login(userData));
  }, [formState.submitData]);

  useEffect(() => {
    if (authState.isError) {
      console.log(authState.message);
      toast.error(JSON.stringify(authState.message));
    }
    if (authState.isSuccess || authState.user) {
      navigate("/");
    }
    dispatch(reset());
  }, [authState, navigate, dispatch]);

  if (authState.isLoading) {
    return <Spinner />;
  }
  return (
    <UserForm inputFields={inputFields}>
      <h1 className="flex gap-4 text-4xl">
        <FaSignInAlt />
        Login
      </h1>
      <p className="flex  gap-4 text-xl">Login and start setting goals!</p>
    </UserForm>
  );
};

export default Login;
