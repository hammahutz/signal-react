import React from "react"

export interface IFormField {
  name: string
  index?: number,
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string
  type? : React.HTMLInputTypeAttribute,
}


const InputField: React.FC<IFormField> = ({
  name,
  index=0,
  type = "text",
  value = "",
  placeholder = `Please enter your ${name.toLowerCase()}`,
  onChange,
}) => {
  return (
    <>
      <input
        type={type}
        className="input input-bordered"
        value={value}
        name={name}
        id={index.toString()}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}

export default InputField
