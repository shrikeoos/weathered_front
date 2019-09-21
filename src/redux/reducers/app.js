import { SWITCH_TEMP_UNIT } from '../actionTypes';

const initialState = {
  unit: 'c',
};

export default (state = initialState, { action, payload }) => {
  switch (action) {
    case SWITCH_TEMP_UNIT:
      return { ...initialState, unit: payload };
    default:
      return state;
  }
};
