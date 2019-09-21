import { SWITCH_TEMP_UNIT } from '../actionTypes';

const initialState = {
  unit: 'c',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SWITCH_TEMP_UNIT:
      return { ...state, unit: payload };
    default:
      return state;
  }
};
