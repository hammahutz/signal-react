import React, { useEffect, useState } from "react"

export type FormField = {
  name: string
  placeholder?: string
  value?: string
}

type Props = {
  children: React.ReactNode
  formFields: FormField[]
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
    setFormdata((prevState) => {
      const updatedState = [...prevState]
      updatedState.forEach((form) => {
        form.placeholder =
          form.placeholder ?? `Please enter your ${form.name.toLowerCase()}`
        form.value = ""
      })
      return updatedState
    })
  }, [])

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card flex flex-col  p-8 rounded-2xl gap-16 w-96 shadow-xl"
    >
      <section className="flex justify-center gap-4 items-center text-4xl w-full">{children}</section>
      <section className="flex flex-col gap-4" onSubmit={onSubmit}>
        {formData.map((formField, index) => (
          <input
            key={formField.name}
            type="text"
            className="input input-bordered"
            value={formField.value}
            name={formField.name}
            id={index.toString()}
            placeholder={formField.placeholder}
            onChange={onChange}
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
