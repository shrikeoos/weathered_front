import { SWITCH_TEMP_UNIT } from '../actionTypes';

export const setCelsius = () => {
  return {
    type: SWITCH_TEMP_UNIT,
    payload: 'c',
  };
};

export const setFahrenheit = () => {
  return {
    type: SWITCH_TEMP_UNIT,
    payload: 'f',
  };
};
