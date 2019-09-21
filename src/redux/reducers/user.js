import { LOGIN } from '../actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...initialState, payload };
    default:
      return state;
  }
};
