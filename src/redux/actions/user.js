import { LOG_USER_IN, LOG_USER_OUT, USER_UPDATE } from '../actionTypes';

export const loginUserAction = (user) => ({
  type: LOG_USER_IN,
  payload: user,
});

export const logoutUserAction = () => ({
  type: LOG_USER_OUT,
  payload: { email: '', username: '', id: -1 },
});

export const updateUserAction = (user) => ({
  type: USER_UPDATE,
  payload: user,
});
