import React, { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import UserForm from "../components/UserForm"

const Register = () => {
  return (
    <UserForm
      formFields={[
        { name: "First Name" },
        { name: "Last Name" },
        { name: "Email" },
        { name: "Password", type: "password" },
        {
          name: "PasswordReenter",
          placeholder: "Please reenter your password",
          type: "password"
        },
      ]}
    >
      <FaUser />
      <h1>Register</h1>
      <p>Please create an account</p>
    </UserForm>
  )
}

export default Register
