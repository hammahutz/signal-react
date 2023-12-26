import React, { useEffect, useState } from "react"
import InputField from "./InputField"

interface IFormField {
  name: string
  placeholder?: string
  value?: string
  type?: React.HTMLInputTypeAttribute
}

interface Props {
  children: React.ReactNode
  formFields: IFormField[]
}

const UserForm = ({ children, formFields }: Props) => {
  const [formData, setFormdata] = useState(formFields)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata((prevState) => {
      const updatedState = [...prevState]
      const index = parseInt(e.target.id, 10)
      updatedState[index].value = e.target.value
      return updatedState
    })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card flex flex-col  p-8 rounded-2xl gap-6 w-96 shadow-xl"
    >
      <section className="flex flex-col justify-center gap-4 items-center w-full">
        {children}
      </section>
      <section className="flex flex-col gap-4" onSubmit={onSubmit}>
        {formData.map((formFieldData, index) => (
          <InputField
            key={index}
            name={formFieldData.name}
            index={index}
            onChange={onChange}
            value={formFieldData.value || ""}
            type={formFieldData.type}
          />
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </section>
    </form>
  )
}

export default UserForm
