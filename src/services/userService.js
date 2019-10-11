import axios from 'axios';

export const createUser = async (user) => {
  try {
    return await axios.post(`http://${process.env.REACT_APP_BACKEND_URL}/user`, user);
  } catch (error) {
    const { data, status } = error.response;
    return { data, status };
  }
};

export const loginUser = (user) => {};
