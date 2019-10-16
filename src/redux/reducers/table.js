import { LOAD_TABLE_DATA, EMPTY_TABLE_DATA } from '../actionTypes';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TABLE_DATA:
      return {
        ...state,
        data: [...state.data, ...payload],
      };
    case EMPTY_TABLE_DATA:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
