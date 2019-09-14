import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

import { getWeatherByCoordinates } from '../../services/locationService';

//TODO insert location into DB
const save = () => {};

const LocationCard = ({ city }) => {
  const { country, latitude, longitude } = city;
  const [data, setData] = useState({ main: {}, weather: [{ description: '' }] });

  useEffect(() => {
    const getWeatherByCoordinatesWrapper = async () => {
      setData(await getWeatherByCoordinates(latitude, longitude));
    };
    getWeatherByCoordinatesWrapper();
  }, []);

  const { main, weather } = data;

  return (
    <>
      <p>
        <b>{`${city.city}, ${country}`}</b>
      </p>
      <p>
        <b>Temperature (°C): </b>
        {main.temp}
      </p>
      <p>
        <b>Condition: </b>
        {weather[0].description}
      </p>
      <p>
        <b>Humidity (%): </b>
        {main.humidity}
      </p>
      <p>
        <b>Pressure (hPa): </b>
        {main.pressure}
      </p>
      <Button type="primary" onClick={save} ghost>
        Save
      </Button>
    </>
  );
};

export default LocationCard;
