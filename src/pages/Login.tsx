import React from "react"
import { FaSignInAlt } from "react-icons/fa"


import UserForm from "../components/UserForm"

const Login = () => {
  return (
    <UserForm
      formFields={[
        { name: "Email" },
        { name: "Password", type: "password"}
      ]}
    >
      <h1 className="flex gap-4 text-4xl"><FaSignInAlt/>Login</h1>
      <p className="flex  gap-4 text-xl">Login and start setting goals!</p>
    </UserForm>
  )
}

export default Login
