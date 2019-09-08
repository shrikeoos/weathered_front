import {ADD_LOCATION} from '../actionTypes'
import { searchLocationByName, searchLocationByCoordinates } from '../../services/searchLocation';

export const searchLocationByNameAction = (locationInput) => {
  return async dispatch => {
    return dispatch({
      type: ADD_LOCATION,
      payload: await searchLocationByName(locationInput)
    })
  }
}

export const searchLocationByCoordinatesAction = (lat, lon) => {
  return async dispatch => {
    return dispatch({
      type: ADD_LOCATION,
      payload: await searchLocationByCoordinates(lat, lon)
    })
  }
}