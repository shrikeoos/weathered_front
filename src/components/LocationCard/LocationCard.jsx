import React, { useState, useEffect } from 'react';
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

const saveLocation = async (location, setLoadingAddLocation, userId, loadTableData) => {
  try {
    setLoadingAddLocation(true);
    await addLocation(location);
    await addLocationToUser(location.id, userId);
    await loadTableData([location]);
    message.success('location added');
  } catch (error) {
    message.error('fail');
  } finally {
    setLoadingAddLocation(false);
  }
};

const tableContainsLocation = (table, city) => table.some((location) => location.id === city.id);

const LocationCard = ({ city, unit, table, flyToLocation, userId, loadTableData }) => {
  const [loading, setLoading] = useState(true);
  const [loadingAddLocation, setLoadingAddLocation] = useState(false);
  const { country, latitude, longitude } = city;
  const [data, setData] = useState({ main: { temp: 0 }, weather: [{ description: '' }] });

  useEffect(() => {
    const getWeatherByCoordinatesWrapper = async () => {
      setData(await getWeatherByCoordinates(latitude, longitude));
    };
    getWeatherByCoordinatesWrapper();
    setLoading(false);
  }, []);

  const { main, weather } = data;

  return loading ? (
    <div className="location__card__spinner">
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
        onClick={() => saveLocation(city, setLoadingAddLocation, userId, loadTableData)}
        ghost
        disabled={tableContainsLocation(table, city)}
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
