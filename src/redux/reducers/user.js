import { LOG_USER_IN, LOG_USER_OUT, USER_UPDATE } from '../actionTypes';

const initialState = {
  id: -1,
  email: '',
  username: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_USER_IN:
      return { ...state, ...payload };
    case LOG_USER_OUT:
      return { ...state, ...payload };
    case USER_UPDATE:
      return { ...state, email: payload.email, username: payload.username };
    default:
      return state;
  }
};
