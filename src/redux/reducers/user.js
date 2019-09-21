import { LOGIN } from '../actionTypes';

const initialState = {
  email: '',
  username: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, email: payload.email, username: payload.username };
    default:
      return state;
  }
};
