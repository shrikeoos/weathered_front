import { ADD_LOCATION } from '../actionTypes';

import { getWeatherByCity, getWeatherByCoordinates } from '../../services/locationService';

export const getWeatherByCityAction = (locationInput) => {
  return async (dispatch) => {
    return dispatch({
      type: ADD_LOCATION,
      payload: await getWeatherByCity(locationInput),
    });
  };
};

export const getWeatherByCoordinatesAction = (lat, lon) => {
  return async (dispatch) => {
    return dispatch({
      type: ADD_LOCATION,
      payload: await getWeatherByCoordinates(lat, lon),
    });
  };
};
