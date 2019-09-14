import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

import './LocationCard.css';

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
    <div className="locationCard">
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
      <Button type="primary" onClick={save} ghost>
        Save
      </Button>
    </div>
  );
};

export default LocationCard;
