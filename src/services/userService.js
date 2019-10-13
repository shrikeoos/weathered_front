import axios from 'axios';
import { store } from '../redux/store';
import { logoutUserAction } from '../redux/actions/user';
import { history } from '../App';
import { getNewRefreshToken } from './tokenService';
import { emptyTableData } from '../redux/actions/table';

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

export const logoutUser = () => {
  history.push('/landing');
  store.dispatch(logoutUserAction());
  store.dispatch(emptyTableData());
  localStorage.clear();
};

export const updateUserService = async (user) => {
  try {
    await getNewRefreshToken();
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
