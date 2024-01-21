import axios from "axios";
import util from "../utils";
import { IGoal, IGoalStatus } from "../interfaces";

const API_URL = "/api/goals";

export const getGoals = async (token: string) => {
  const config = util.getTokenHeader(token);
  const response = await axios.get(API_URL, config);
  const { data } = response;

  if (!data) {
    return Error(`Can't get data ${response}`);
  }

  return data as IGoal[] | Error;
};

export const createGoal = async (text: string, token: string) => {
  const config = util.getTokenHeader(token);
  const response = await axios.post(API_URL, { text }, config);
  const { data } = response;

  if (!data) {
    return Error(`Can't get data ${response}`);
  }
  return data as IGoal | Error;
};

export const deleteGoal = async (id: string, token: string) => {
  const config = util.getTokenHeader(token);

  const deleteUrl = `${API_URL}/${id}`;
  const response = await axios.delete(deleteUrl, config);
  const { data } = response;

  console.log(deleteUrl);
  console.log(data);

  if (!data) {
    return Error(`Can't get data ${response}`);
  }

  return data.id as string | Error;
};

export const setGoalStatus = async (status: IGoalStatus, token: string) => {
  const { goalId, isCompleted } = status;
  const config = util.getTokenHeader(token);
  const url = `${API_URL}/status/${goalId}`;
  const payload = JSON.stringify({isCompleted: isCompleted})

  const response = await axios.patch(url, {isCompleted: isCompleted}, config);
  const { data } = response;

  console.log(data);

  if (!data) {
    return Error(`Can't get data ${response}`);
  }

  return data as IGoal | Error;
};
