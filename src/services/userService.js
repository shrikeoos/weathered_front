import axios from 'axios';

export const createUser = async (user) => {
  try {
    return await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user`, user);
  } catch (error) {
    const { data, status } = error.response;
    return { data, status };
  }
};

export const loginUser = async (user) => {
  try {
    return await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, user);
  } catch (error) {
    const { data, status } = error.response;
    return { data, status };
  }
};

export const updateUserService = async (user) => {
  try {
    return await axios.put(`${process.env.REACT_APP_BACKEND_URL}/user`, user, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  } catch (error) {
    const { data, status } = error.response;
    return { data, status };
  }
};
