import React from 'react';
import { withRouter } from 'react-router-dom';

import { getCityName } from '../../services/locationService';
import './CityCard.css';

const CityCard = React.memo(({ city, location }) => {
  return (
    <>
      <div className="cityCard__main">
        <h1>{`${city.sys.country}, ${getCityName(location.pathname)}`}</h1>
        <div className="cityCard__temp__group">
          <h1 className="cityCard__temp">{`${city.main.temp} °C`}</h1>
          <img
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      </div>
      <p>
        (<span style={{ color: 'blue' }}>min: {city.main.temp_min}</span>,{' '}
        <span style={{ color: 'red' }}>max: {city.main.temp_max}</span>)
      </p>
      <p>Description: {city.weather[0].description}</p>
      <p>Humidity (%): {city.main.humidity}</p>
      <p>Pressure (hPa): {city.main.pressure}</p>
      <p>Wind speed (m/s): {city.wind.speed}</p>
      <p>Wind direction (degrees): {city.wind.deg}</p>
    </>
  );
});

export default withRouter(CityCard);
