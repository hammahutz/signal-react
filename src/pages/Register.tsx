import React, {useState, useEffect} from "react"
import { FaUser } from "react-icons/fa"


const Register = () => {
  const [formData, setFormdata] = useState({
      name: "",
      email: "",
      password: "",
      reenteredPassword: "",
  })
  return (
    <section className="heading">
      <FaUser />
        <h1>Register</h1>
    </section>
  )
}

export default Register
