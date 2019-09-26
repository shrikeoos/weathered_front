import { celsiusToFahrenheit, getRightTemperature } from '../temperatureUtils';

describe('temperatureUtils', () => {
  describe('should convert a temperature in celsius to a temperature in fahrenheit', () => {
    it('should return 32', () => {
      expect(celsiusToFahrenheit(0)).toBe(32);
    });

    it('should return -40', () => {
      expect(celsiusToFahrenheit(-40)).toBe(-40);
    });
  });

  describe('should return and format to 2 digits the right temperature depending on the input', () => {
    it('should return 90.50', () => {
      expect(getRightTemperature('f', 32.5)).toBe('90.50');
    });

    it('should return 32.50', () => {
      expect(getRightTemperature('c', 32.5)).toBe('32.50');
    });
  });
});
