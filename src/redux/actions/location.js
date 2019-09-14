import { ADD_LOCATION, SEARCH_CITIES } from '../actionTypes';

import {
  getWeatherByCity,
  getWeatherByCoordinates,
  getCityByName,
} from '../../services/locationService';

export const getWeatherByCityAction = (locationInput) => {
  return async (dispatch) =>
    dispatch({
      type: ADD_LOCATION,
      payload: await getWeatherByCity(locationInput),
    });
};

export const getWeatherByCoordinatesAction = (lat, lon) => {
  return async (dispatch) =>
    dispatch({
      type: ADD_LOCATION,
      payload: await getWeatherByCoordinates(lat, lon),
    });
};

export const getCityByNameAction = (city) => {
  return async (dispatch) => {
    return dispatch({
      type: SEARCH_CITIES,
      payload: await getCityByName(city),
    });
  };
};
