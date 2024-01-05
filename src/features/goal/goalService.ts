import axios from "axios";

const API_URL = "/api/goals/";

const createGoal = async (text: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, { text }, config);

  if (!response.data) {
    return Error(`Can't get data ${response}`);
  }
  return response.data;
};

export default { createGoal };
