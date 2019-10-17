import { LOAD_TABLE_DATA, EMPTY_TABLE_DATA, DELETE_LOCATION } from '../actionTypes';

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
    case DELETE_LOCATION:
      return { ...state, data: state.data.filter((location) => location.id !== payload) };
    default:
      return state;
  }
};
