import React from "react"
import InputField, { IFormField } from "./InputField"



interface Props {
  children: React.ReactNode
  formData: IFormField[]
  setFormdata: React.Dispatch<React.SetStateAction<IFormField[]>>
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const UserForm = ({ children, formData, setFormdata, onSubmit }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata((prevState) => {
      const updatedState = [...prevState]
      const index = parseInt(e.target.id, 10)
      updatedState[index].value = e.target.value
      return updatedState
    })
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
        {formData.map((formField, index) => (
          <InputField
            key={index}
            name={formField.name}
            index={index}
            onChange={onChange}
            value={formField.value || ""}
            type={formField.type}
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
