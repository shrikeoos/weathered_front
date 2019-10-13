export const celsiusToFahrenheit = (temperature) => (parseFloat(temperature, 10) * 9) / 5 + 32;

export const getRightTemperature = (unit, temperature) => {
  return unit === 'f'
    ? celsiusToFahrenheit(temperature).toFixed(2)
    : parseFloat(temperature, 10).toFixed(2);
};
