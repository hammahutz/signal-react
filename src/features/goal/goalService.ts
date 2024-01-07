import axios from "axios";
import util from "../../util";
import { IGoal } from ".";

const API_URL = "/api/goals";

const getGoals = async (token: string) => {
  const config = util.getTokenHeader(token);
  const response = await axios.get(API_URL, config);
  const { data } = response;

  if (!data) {
    return Error(`Can't get data ${response}`);
  }

  return data as IGoal[] | Error;
};

const createGoal = async (text: string, token: string) => {
  const config = util.getTokenHeader(token);
  const response = await axios.post(API_URL, { text }, config);
  const { data } = response;

  if (!data) {
    return Error(`Can't get data ${response}`);
  }
  return data as IGoal | Error;
};

export default { createGoal, getGoals };