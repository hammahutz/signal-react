import React, { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { IFormField } from "../components/InputField"
import UserForm from "../components/UserForm"



const Login = () => {
  const [formData, setFormdata] = useState([
    { name: "Email" },
    { name: "Password", type: "password" },
  ] as IFormField[])

  const onSubmit = (e: React.FormEvent)=> {
    e.preventDefault();
    console.log("hello");
  }

  return (
    <UserForm
      formData={formData}
      setFormdata={setFormdata}
      onSubmit={onSubmit}
    >
      <h1 className="flex gap-4 text-4xl"><FaSignInAlt/>Login</h1>
      <p className="flex  gap-4 text-xl">Login and start setting goals!</p>
    </UserForm>
  )
}

export default Login
