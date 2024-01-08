export interface IRegisterUserData {
  name: string;
  email: string;
  password: string;
  passwordreenter: string;
  token: string;
}

export interface ILoginUserData {
  email: string;
  password: string;
}

export interface IAutState {
  user: IRegisterUserData | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
