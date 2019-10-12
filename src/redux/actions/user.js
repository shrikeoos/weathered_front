import { LOG_USER_IN } from '../actionTypes';

export const loginUserAction = (user) => ({
  type: LOG_USER_IN,
  payload: user,
});
