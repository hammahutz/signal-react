import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "../context";
import UserForm from "../components/UserForm";
import Spinner from "../components/Spinner";
import { IInputField } from "../interfaces/form";
import { IRegisterUserData } from "../interfaces/auth";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const formState = useAppSelector((state) => state.form);
  const { isFormSubmitted } = actions.form;
  const { register, reset } = actions.auth;

  const userFields = [
    { name: "Name" },
    { name: "Email" },
    { name: "Password", type: "password" },
    {
      name: "PasswordReenter",
      placeholder: "Please reenter your password",
      type: "password",
    },
  ] as IInputField[];

  useEffect(() => {
    if (!formState.isSubmitted) {
      return;
    }
    dispatch(isFormSubmitted(false));
    const userData = formState.submitData as IRegisterUserData;
    if (!userData.email || !userData.name || !userData.password || !userData.passwordreenter) {
      toast.error("Please fill the form");
      return;
    }
    if (userData.password !== userData.passwordreenter) {
      toast.error("Passwords do not match");
      return;
    }
    dispatch(register(userData));
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
    <>
      <UserForm inputFields={userFields}>
        <h1 className="flex gap-4 text-4xl">
          <FaUser />
          Register
        </h1>
        <p className="flex  gap-4 text-xl">Create an account and set goals!</p>
      </UserForm>
    </>
  );
};

export default Register;
