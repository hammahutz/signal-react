import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { actions } from "../context";

type Props = {
  index: number;
};

const InputField: React.FC<Props> = ({ index }) => {
  const formState = useAppSelector((state) => state.form);
  const [input, setInput] = useState({
    ...formState.formFields[index],
    value: "",
    placeholder:
      formState.formFields[index].placeholder ??
      `Please enter your ${formState.formFields[index].name.toLocaleLowerCase()}`,
    type: formState.formFields[index].type ?? "text",
  });
  const dispatch = useAppDispatch();
  const { setFormValue } = actions.form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setFormValue({ index, value: value }));
    setInput((prevState) => {
      const newState = prevState;
      newState.value = value;
      return newState;
    });
  };

  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{input.name}</span>
        </div>
        <input
          type={input.type}
          className="input input-bordered"
          value={input.value}
          name={input.name}
          id={index.toString()}
          placeholder={input.placeholder}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export { InputField };
