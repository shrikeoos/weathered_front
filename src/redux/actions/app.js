import { SWITCH_TEMP_UNIT } from '../actionTypes';

export const setCelsius = () => ({
  type: SWITCH_TEMP_UNIT,
  payload: 'c',
});

export const setFahrenheit = () => ({
  type: SWITCH_TEMP_UNIT,
  payload: 'f',
});
