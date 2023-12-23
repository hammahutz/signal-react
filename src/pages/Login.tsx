import React from "react"
import { FaSignInAlt } from "react-icons/fa"

import UserForm from "../components/UserForm"

const Login = () => {
  return (
    <UserForm
      formFields={[
        { name: "Email" },
        { name: "Password" }
      ]}
    >
      <FaSignInAlt />
      <h1>Login</h1>
    </UserForm>
  )
}

export default Login
