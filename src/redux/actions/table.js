import { LOAD_TABLE_DATA, EMPTY_TABLE_DATA } from '../actionTypes';
import { getData } from '../../services/weatherService';

export const loadTableData = (locations, unit) => async (dispatch) =>
  dispatch({
    type: LOAD_TABLE_DATA,
    payload: await getData(locations, unit),
  });

export const emptyTableData = () => ({
  type: EMPTY_TABLE_DATA,
  payload: { data: [] },
});
