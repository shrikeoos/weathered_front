import { LOG_USER_IN, LOG_USER_OUT } from '../actionTypes';

export const loginUserAction = (user) => ({
  type: LOG_USER_IN,
  payload: user,
});

export const logoutUserAction = () => ({
  type: LOG_USER_OUT,
  payload: { email: '', username: '' },
});
