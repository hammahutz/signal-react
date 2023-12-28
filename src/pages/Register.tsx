import React, { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { RegisterUserData, register, reset } from "../features/auth/authSlice"
import { IFormField } from "../components/InputField"
import UserForm from "../components/UserForm"
import Spinner from "../components/Spinner"

const Register = () => {
  const [formData, setFormdata] = useState([
    { name: "Name" },
    { name: "Email" },
    { name: "Password", type: "password" },
    {
      name: "PasswordReenter",
      placeholder: "Please reenter your password",
      type: "password",
    },
  ] as IFormField[])

  const isUserInputValid = (user: RegisterUserData) => {
    if (!user.email || !user.name || !user.password || !user.passwordreenter) {
      toast.error("Please fill the form")
      return false
    }
    if (user.password !== user.passwordreenter) {
      toast.error("Passwords do not match")
      return false
    }
    return true
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = formData.reduce(
      (prevValue, currentValue) => ({
        ...prevValue,
        [currentValue.name.toLowerCase()]: currentValue.value,
      }),
      {},
    ) as RegisterUserData

    if (isUserInputValid(userData)) {
      dispatch(register(userData))
    }
  }

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const authState = useAppSelector((state) => state.auth)

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
    <UserForm onSubmit={onSubmit} formData={formData} setFormdata={setFormdata}>
      <FaUser />
      <h1>Register</h1>
      <p>Please create an account</p>
    </UserForm>
  )
}

export default Register
