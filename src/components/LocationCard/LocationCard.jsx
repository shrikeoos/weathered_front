import React from 'react';
import { Card, Button } from 'antd';

//TODO insert location into DB
const save = () => {};

const LocationCard = ({ location }) => {
  return (
    Object.entries(location).length !== 0 && (
      // <Card title={`${location.name}, ${location.sys.country}`}>
      <div>
        <p><b>{`${location.name}, ${location.sys.country}`}</b></p>
        <p>
          <b>Temperature (°C): </b>
          {location.main.temp}
        </p>
        <p>
          <b>Condition: </b>
          {location.weather[0].description}
        </p>
        <p>
          <b>Humidity (%): </b>
          {location.main.humidity}
        </p>
        <p>
          <b>Pressure (hPa): </b>
          {location.main.pressure}
        </p>
        <Button type="primary" onClick={save} ghost>
          Save
        </Button>
      </div>
      // </Card>
    )
  );
};

export default LocationCard;
