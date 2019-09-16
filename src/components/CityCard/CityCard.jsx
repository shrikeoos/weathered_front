import React from 'react';
import { withRouter } from 'react-router-dom';

import { getCityName } from '../../services/locationService';
import { getStatus } from '../../services/weatherService';

const CityCard = ({ city, location }) => {
  return (
    <div>
      <h1>
        {`${city.sys.country}, ${getCityName(location.pathname)}`} {getStatus(city.main.temp)}
      </h1>
      <p>Description: {city.weather[0].description}</p>
      <p>
        Temperature (°C): {city.main.temp} (
        <span style={{ color: 'blue' }}>min: {city.main.temp_min}</span>,{' '}
        <span style={{ color: 'red' }}>max: {city.main.temp_max}</span>)
      </p>
      <p>Humidity (%): {city.main.humidity}</p>
      <p>Pressure (hPa): {city.main.pressure}</p>
      <p>Wind speed (m/s): {city.wind.speed}</p>
      <p>Wind direction (degrees): {city.wind.deg}</p>
    </div>
  );
};

export default withRouter(CityCard);
