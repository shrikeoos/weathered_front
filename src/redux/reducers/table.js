import { LOAD_TABLE_DATA } from '../actionTypes';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TABLE_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
