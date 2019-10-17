import { ADD_LOCATION, SEARCH_CITIES, FLY_TO_LOCATION, RESET_LOCATION } from '../actionTypes';

import {
  getWeatherByCity,
  getWeatherByCoordinates,
  getCityByName,
} from '../../services/locationService';

export const getWeatherByCityAction = (locationInput) => async (dispatch) =>
  dispatch({
    type: ADD_LOCATION,
    payload: await getWeatherByCity(locationInput),
  });

export const getWeatherByCoordinatesAction = (lat, lon) => async (dispatch) =>
  dispatch({
    type: ADD_LOCATION,
    payload: await getWeatherByCoordinates(lat, lon),
  });

export const getCityByNameAction = (city) => async (dispatch) =>
  dispatch({
    type: SEARCH_CITIES,
    payload: await getCityByName(city),
  });

export const flyToLocation = (location) => ({
  type: FLY_TO_LOCATION,
  payload: location,
});

export const resetLocation = () => ({
  type: RESET_LOCATION,
  payload: [],
});
