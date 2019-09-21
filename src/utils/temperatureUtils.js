export const celsiusToFahrenheit = (temperature) => (temperature * 9) / 5 + 32;

export const getRightTemperature = (unit, temperature) =>
  unit === 'f' ? celsiusToFahrenheit(temperature).toFixed(2) : temperature;
