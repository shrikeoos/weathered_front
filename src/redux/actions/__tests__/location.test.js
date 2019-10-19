import { flyToLocation, resetLocation } from '../location';
import { FLY_TO_LOCATION, RESET_LOCATION } from '../../actionTypes';

describe('location actions', () => {
  describe('flyToLocation', () => {
    it('should create an action with a location to fly to', () => {
      const expectedDestination = {
        type: FLY_TO_LOCATION,
        payload: {
          latitude: 0,
          longitude: 0,
        },
      };
      expect(flyToLocation({ latitude: 0, longitude: 0 })).toEqual(expectedDestination);
    });
  });

  describe('resetLocation', () => {
    it('should create an action to reset the location state', () => {
      const expectedAction = {
        type: RESET_LOCATION,
      };
      expect(resetLocation()).toEqual(expectedAction);
    });
  });
});
