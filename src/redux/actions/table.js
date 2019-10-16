import { LOAD_TABLE_DATA, EMPTY_TABLE_DATA } from '../actionTypes';
import { getData } from '../../services/weatherService';

export const loadTableData = (locations) => async (dispatch) => {
  console.log('oii');
  return dispatch({
    type: LOAD_TABLE_DATA,
    payload: await getData(locations),
  });
};

export const emptyTableData = () => ({
  type: EMPTY_TABLE_DATA,
  payload: { data: [] },
});
