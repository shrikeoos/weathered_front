import {ADD_LOCATION} from '../actionTypes'
import searchLocation from '../../services/searchLocation'

export const searchLocationAction = (locationInput) => {
  return async dispatch => {
    return dispatch({
      type: ADD_LOCATION,
      payload: await searchLocation(locationInput)
    })
  }
}