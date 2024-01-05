import axios from "axios";
import { LoginUserData, RegisterUserData } from ".";

const API_URL = "/api/users/";

const register = async (user: RegisterUserData) => {
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

const login = async (user: LoginUserData) => {
  const response = await axios.post(`${API_URL}/login/`, {
    email: user.email,
    password: user.password,
  });

  if (!response.data) {
    return Error("coulnt get data");
  }
  localStorage.user = JSON.stringify(response.data);
  return response.data;
};

const logout = async () => {
  localStorage.user = null;
};

export default { register, login, logout };
