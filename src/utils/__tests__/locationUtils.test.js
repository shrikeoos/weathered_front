import { getLatLon, getCityName } from '../locationUtils';

describe('locationUtil', () => {
  describe('getLatLon', () => {
    it('should extract the latitude and the longitude values from a string as an array', () => {
      expect(getLatLon('?lat=18&lon=64')).toEqual(['18', '64']);
    });
  });

  describe('getCityName', () => {
    it('should extract the name of the city', () => {
      expect(getCityName('/city/Singapore')).toBe('Singapore');
    });

    it('should extract the name of the city with space', () => {
      expect(getCityName('/city/New York')).toBe('New York');
    });
  });
});
