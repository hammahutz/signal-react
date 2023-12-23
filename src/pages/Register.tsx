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
        { name: "Password" },
        {
          name: "PasswordReenter",
          placeholder: "Please reenter your password",
        },
      ]}
    >
      <FaUser />
      <h1>Register</h1>
    </UserForm>
  )
}

export default Register
