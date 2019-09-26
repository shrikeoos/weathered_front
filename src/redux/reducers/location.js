import { ADD_LOCATION, SEARCH_CITIES, FLY_TO_LOCATION } from '../actionTypes';

const initialState = {
  data: {},
  cities: [],
  focusedCity: {},
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

    case FLY_TO_LOCATION:
      return {
        ...state,
        focusedCity: payload,
      };

    default:
      return state;
  }
};
