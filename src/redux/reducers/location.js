import { ADD_LOCATION, SEARCH_CITIES } from '../actionTypes';

const initialState = {
  data: {},
  cities: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LOCATION:
      return {
        ...state,
        data: payload,
      };

    case SEARCH_CITIES:
      return {
        ...state,
        cities: payload,
      };

    default:
      return state;
  }
};
