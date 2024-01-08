import axios from "axios";
import { IRegisterUserData, ILoginUserData } from "../interfaces/auth";

const API_URL = "/api/users/";

export const register = async (user: IRegisterUserData) => {
  const response = await axios.post(API_URL, {
    name: user.name,
    email: user.email,
    password: user.password,
  });

  if (!response.data) {
    return Error("coulnt get data");
  }
  localStorage.user = JSON.stringify(response.data);
  return response.data;
};

export const login = async (user: ILoginUserData) => {
  const response = await axios.post(`${API_URL}/login/`, {
    email: user.email,
    password: user.password,
  });

  if (!response.data) {
    return Error("Could not get the data");
  }
  localStorage.user = JSON.stringify(response.data);
  return response.data;
};

export const logout = async () => {
  localStorage.user = null;
};
