import { LOAD_TABLE_DATA } from '../actionTypes';
import { getData } from '../../services/weatherService';

export const loadTableData = (locations, unit) => {
  return async (dispatch) => {
    return dispatch({
      type: LOAD_TABLE_DATA,
      payload: await getData(locations, unit),
    });
  };
};
