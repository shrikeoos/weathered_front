import React from 'react';
import { Card } from 'antd';

const LocationCard = ({ location }) => {
  return (
    Object.entries(location).length !== 0 && (
      <div>
        <Card title={location.name}>
          <p>
            <b>temperature</b>
            {location.main.temp}
          </p>
          <p>
            <b>desc</b>
            {location.weather.main}
          </p>
          <p>
            <b>humidity</b>
            {location.main.humidity}
          </p>
          <p>
            <b>pressure</b>
            {location.main.pressure}
          </p>
        </Card>
      </div>
    )
  );
};

export default LocationCard;
