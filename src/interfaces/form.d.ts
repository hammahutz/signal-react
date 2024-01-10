export interface IFormState {
  formFields: IInputField[];
  submitData: object;
  isSubmitted: boolean;
}

export interface IIndexValuePair {
  index: number;
  value: string;
}

export interface IInputField {
  name: string;
  value?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}
