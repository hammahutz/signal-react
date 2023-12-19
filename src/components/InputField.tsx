import React from "react"

interface InputFieldProps {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({ name, value, onChange }) => {
  return (
    <>
      <input
        type="text"
        className="input input-bordered"
        value={value}
        name={name}
        id={name}
        placeholder={`Enter your ${name}`}
        onChange={onChange}
      />
    </>
  )
}

export default InputField
