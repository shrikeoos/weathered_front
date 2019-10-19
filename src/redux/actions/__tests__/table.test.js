import { emptyTableData, deleteLocationAction } from '../table';
import { EMPTY_TABLE_DATA, DELETE_LOCATION } from '../../actionTypes';

describe('table action', () => {
  describe('emptyTableData', () => {
    it('should return an action emptying the table data field', () => {
      expect(emptyTableData()).toEqual({ type: EMPTY_TABLE_DATA, payload: { data: [] } });
    });
  });

  describe('deleteLocationAction', () => {
    it('should return an action with a locationid to be deleted', () => {
      expect(deleteLocationAction(12345)).toEqual({ type: DELETE_LOCATION, payload: 12345 });
    });
  });
});
