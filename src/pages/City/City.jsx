import React, { useState, useEffect } from 'react';
import { getWeatherByCoordinates } from '../../services/locationService';
import { Spin } from 'antd';

import { getLatLon } from '../../services/locationService';
import { getStatus } from '../../services/weatherService';

const City = (props) => {
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataCity = async () => {
      const [lat, lon] = getLatLon(props.location.search);
      setCity(await getWeatherByCoordinates(lat, lon));
      setLoading(false);
    };
    getDataCity();
  }, []);

  console.log(city);

  return loading ? (
    <div
      style={{ height: '93vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Spin />
    </div>
  ) : (
    <div style={{ height: '93vh', backgroundColor: 'white', padding: '50px' }}>
      <h1>
        {`${city.sys.country}, ${city.name}`} {getStatus(city.main.temp)}
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

export default City;
