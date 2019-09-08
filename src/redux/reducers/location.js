import { ADD_LOCATION } from '../actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_LOCATION:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};
