import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { getRightTemperature } from '../../utils/temperatureUtils';

import './LocationCard.css';

import { getWeatherByCoordinates } from '../../services/locationService';
import { flyToLocation } from '../../redux/actions/location';

//TODO insert location into DB
const save = () => {};

const LocationCard = ({ city, unit, flyToLocation }) => {
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
        <b>Temperature (°{`${unit.toUpperCase()}`}): </b>
        {getRightTemperature(unit, main.temp)}
      </p>
      <p>
        <b>Condition: </b>
        {weather[0].description}
      </p>
      <Button type="primary" onClick={save} ghost>
        Save
      </Button>
      <Button
        style={{ marginLeft: '5px', color: 'orange' }}
        onClick={() => flyToLocation({ latitude, longitude })}
      >
        view
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  flyToLocation: (location) => dispatch(flyToLocation(location)),
});

const mapStateToProps = (state) => ({
  unit: state.app.unit,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationCard);
