import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setValue } from "../features/form/formSlice"

export interface IInputField {
  name: string
  value?: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
}

interface Props {
  index: number
}

const InputField: React.FC<Props> = ({ index }) => {
  const formState = useAppSelector((state) => state.form)
  const [input, setInput] = useState({
    ...formState.formFields[index],
    value: "",
    placeholder:
      formState.formFields[index].placeholder ??
      `Please enter ${formState.formFields[index].name}`,
    type: formState.formFields[index].type ?? "text",
  })
  const dispatch = useAppDispatch()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    dispatch(setValue({ index, value: value }))
    setInput((prevState) => {
      const newState = prevState
      newState.value = value
      return newState
    })
  }

  return (
    <>
      <input
        type={input.type}
        className="input input-bordered"
        value={input.value}
        name={input.name}
        id={index.toString()}
        placeholder={input.placeholder}
        onChange={onChange}
      />
    </>
  )
}

export default InputField
