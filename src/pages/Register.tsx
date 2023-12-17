import React, {useState, useEffect} from "react"
import { FaUser } from "react-icons/fa"
const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    reenteredPassword: "",
})


const Register = () => {
  return (
    <section className="heading">
        <h1><FaUser /> Register</h1>
    </section>
  )
}

export default Register
