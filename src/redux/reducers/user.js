import { LOG_USER_IN } from '../actionTypes';

const initialState = {
  email: '',
  username: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_USER_IN:
      return { ...state, email: payload.email, username: payload.username };
    default:
      return state;
  }
};
