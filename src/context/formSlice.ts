import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormState, IIndexValuePair, IInputField } from "../interfaces";

const initialState: IFormState = {
  formFields: [] as IInputField[],
  submitData: {} as object,
  isSubmitted: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<IInputField[]>) => {
      state.formFields?.push(...action.payload);
    },
    removeForm: (state) => {
      state.formFields = [] as IInputField[];
      state.submitData = {};
      state.isSubmitted = false;
    },
    setFormValue: (state, action: PayloadAction<IIndexValuePair>) => {
      const { index, value } = action.payload;
      const newState = [...state.formFields];
      newState[index].value = value;
      state.formFields = newState;
    },
    submitForm: (state, action: PayloadAction<object>) => {
      const data = action.payload;
      state.submitData = data;
      state.isSubmitted = true;
    },
    isFormSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const actions = { ...formSlice.actions };
export const reducer = formSlice.reducer;
