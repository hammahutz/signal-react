import React, { useEffect } from "react";
import { InputField } from ".";
import { useAppDispatch, useAppSelector } from "../hooks";
import { actions } from "../context";
import { IInputField } from "../interfaces";

interface Props {
  children: React.ReactNode;
  inputFields: IInputField[];
}

const UserForm: React.FC<Props> = ({ children, inputFields }: Props) => {
  const formState = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const { addForm, removeForm, submitForm } = actions.form;

  useEffect(() => {
    dispatch(addForm(inputFields));
    return () => {
      dispatch(removeForm());
    };
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = formState.formFields.reduce(
      (prevValue, currentValue) => ({
        ...prevValue,
        [currentValue.name.toLowerCase()]: currentValue.value,
      }),
      {}
    );
    dispatch(submitForm(formData));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col  p-8  rounded-2xl gap-6 w-96 shadow-2xl">
      <section className="flex flex-col justify-center gap-4 items-center w-full">{children}</section>
      <section className="flex flex-col gap-4">
        {formState.formFields.map((_, index) => (
          <InputField
            key={index}
            index={index}
          />
        ))}
        <button
          type="submit"
          className="btn btn-primary">
          Submit
        </button>
      </section>
    </form>
  );
};

export default UserForm;
