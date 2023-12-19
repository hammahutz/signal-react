import React, { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import InputField from "../components/InputField"

interface FormData {
  name: string
  email: string
  password: string
  reenteredPassword: string
  [key: string]: string
}

const Register = () => {
  const [formData, setFormdata] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    reenteredPassword: "",
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <article className="card flex flex-col  p-8 rounded-2xl gap-16 w-96 shadow-xl">
      <section className="flex text-4xl w-fit">
        <FaUser />
        <h1>Register</h1>
      </section>

      <section>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <p>Please enter credential to create an account</p>
          {Object.getOwnPropertyNames(formData).map((k) => (
            <InputField
              key={k}
              name={k}
              value={formData[k]}
              onChange={onChange}
            />
          ))}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </article>
  )
}

export default Register
