import { LOAD_TABLE_DATA, EMPTY_TABLE_DATA, DELETE_LOCATION } from '../actionTypes';
import { getData } from '../../services/weatherService';

export const loadTableData = (locations) => async (dispatch) => {
  return dispatch({
    type: LOAD_TABLE_DATA,
    payload: await getData(locations),
  });
};

export const emptyTableData = () => ({
  type: EMPTY_TABLE_DATA,
  payload: { data: [] },
});

export const deleteLocationAction = (locationId) => ({
  type: DELETE_LOCATION,
  payload: locationId,
});
