import { LOG_USER_IN, LOG_USER_OUT } from '../actionTypes';

const initialState = {
  email: '',
  username: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_USER_IN:
      return { ...state, ...payload };
    case LOG_USER_OUT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
