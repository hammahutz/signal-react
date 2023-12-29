import React, { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { RegisterUserData, register, reset } from "../features/auth/authSlice"
import { addForm, isSubmitted, removeForm } from "../features/form/formSlice"
import { IInputField } from "../components/InputField"
import UserForm from "../components/UserForm"
import Spinner from "../components/Spinner"

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const authState = useAppSelector((state) => state.auth)
  const formState = useAppSelector((state) => state.form)
  const userFields = [
    { name: "Name" },
    { name: "Email" },
    { name: "Password", type: "password" },
    {
      name: "PasswordReenter",
      placeholder: "Please reenter your password",
      type: "password",
    },
  ] as IInputField[]

  useEffect(() => {
    if (!formState.isSubmitted) {
      return
    }
    dispatch(isSubmitted(false))
    const userData = formState.submitData as RegisterUserData
    if (
      !userData.email ||
      !userData.name ||
      !userData.password ||
      !userData.passwordreenter
    ) {
      toast.error("Please fill the form")
      return
    }
    if (userData.password !== userData.passwordreenter) {
      toast.error("Passwords do not match")
      return
    }
    dispatch(register(userData))
  }, [formState.submitData])

  useEffect(() => {
    if (authState.isError) {
      console.log(authState.message)
      toast.error(JSON.stringify(authState.message))
    }
    if (authState.isSuccess || authState.user) {
      navigate("/")
    }
    dispatch(reset())
  }, [authState, navigate, dispatch])

  if (authState.isLoading) {
    return <Spinner />
  }
  return (
    <>
      <UserForm inputFields={userFields}>
        <FaUser />
        <h1>Register</h1>
        <p>Please create an account</p>
      </UserForm>
    </>
  )
}

export default Register
