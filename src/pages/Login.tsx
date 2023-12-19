import React, { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import InputField from "../components/InputField"

interface FormData {
  email: string
  password: string
  [key: string]: string
}

const Login = () => {
  const [formData, setFormdata] = useState<FormData>({
    email: "",
    password: "",
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <article className="card flex flex-col  p-8 rounded-2xl gap-16 w-96 shadow-xl">
      <section className="flex text-4xl w-fit">
        <FaSignInAlt />
        <h1>Login</h1>
      </section>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
    </article>
  )
}

export default Login
