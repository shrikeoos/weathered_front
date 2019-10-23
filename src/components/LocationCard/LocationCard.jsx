import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Spin, message } from 'antd';

import { getRightTemperature } from '../../utils/temperatureUtils';

import './LocationCard.css';

import {
  getWeatherByCoordinates,
  addLocation,
  addLocationToUser,
} from '../../services/locationService';
import { flyToLocation } from '../../redux/actions/location';
import { loadTableData } from '../../redux/actions/table';

const LocationCard = ({ city, unit, table, flyToLocation, userId, loadTableData }) => {
  const [loading, setLoading] = useState(true);
  const [loadingAddLocation, setLoadingAddLocation] = useState(false);
  const { country, latitude, longitude } = city;
  const [data, setData] = useState({ main: { temp: 0 }, weather: [{ description: '' }] });

  const saveLocation = useCallback(async () => {
    try {
      setLoadingAddLocation(true);
      await addLocation(city);
      await addLocationToUser(city.id, userId);
      await loadTableData([city]);
      message.success('location added');
    } catch (error) {
      message.error('fail');
    } finally {
      setLoadingAddLocation(false);
    }
  }, [city, userId]);

  const tableContainsLocation = useCallback(
    () => table.some((location) => location.id === city.id),
    [table, city]
  );

  useEffect(() => {
    const getWeatherByCoordinatesWrapper = async () => {
      setData(await getWeatherByCoordinates(latitude, longitude));
    };
    getWeatherByCoordinatesWrapper();
    setLoading(false);
  }, []);

  const { main, weather } = data;

  return loading ? (
    <div className="locationCardSpinner">
      <Spin />
    </div>
  ) : (
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
      <Button
        type="primary"
        onClick={() => saveLocation()}
        ghost
        disabled={tableContainsLocation()}
        loading={loadingAddLocation}
      >
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

LocationCard.propTypes = {
  userId: PropTypes.number.isRequired,
  city: PropTypes.object.isRequired,
  unit: PropTypes.string.isRequired,
  table: PropTypes.array.isRequired,
  flyToLocation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.user.id,
  unit: state.app.unit,
  table: state.table.data,
});

const mapDispatchToProps = (dispatch) => ({
  flyToLocation: (location) => dispatch(flyToLocation(location)),
  loadTableData: (location) => dispatch(loadTableData(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationCard);
