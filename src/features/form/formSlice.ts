import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInputField } from "../../components/InputField";

// Get User form localStorage
// const storedUser = localStorage.user
interface formState {
  formFields: IInputField[];
  submitData: object;
  isSubmitted: boolean;
}

export interface IndexValuePair {
  index: number;
  value: string;
}

const initialState: formState = {
  formFields: [] as IInputField[],
  submitData: {} as object,
  isSubmitted: false,
};

export const formSlice = createSlice({
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
    setValue: (state, action: PayloadAction<IndexValuePair>) => {
      const { index, value } = action.payload;
      const newState = [...state.formFields];
      newState[index].value = value;
      state.formFields = newState;
    },
    submitData: (state, action: PayloadAction<object>) => {
      const data = action.payload;
      state.submitData = data;
      state.isSubmitted = true;
    },
    isSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const { addForm, removeForm, setValue, submitData, isSubmitted } = formSlice.actions;
export default formSlice.reducer;
