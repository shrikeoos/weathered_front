import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCityName } from '../../utils/locationUtils';
import { capitalize } from '../../utils/appUtils';

import { getRightTemperature } from '../../utils/temperatureUtils';
import './CityCard.css';

const CityCard = ({ city, location, unit }) => {
  return (
    <>
      <div className="cityCard">
        <h1>{`${city.sys.country}, ${capitalize(getCityName(location.pathname))}`}</h1>
        <div className="cityCardTempGroup">
          <h1 className="cityCardTemp">{`${getRightTemperature(
            unit,
            city.main.temp
          )} °${unit.toUpperCase()}`}</h1>
          <img
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      </div>
      <p>
        (<span style={{ color: 'blue' }}>min: {getRightTemperature(unit, city.main.temp_min)}</span>
        , <span style={{ color: 'red' }}>max: {getRightTemperature(unit, city.main.temp_max)}</span>
        )
      </p>
      <p>Description: {city.weather[0].description}</p>
      <p>Humidity (%): {city.main.humidity}</p>
      <p>Pressure (hPa): {city.main.pressure}</p>
      <p>Wind speed (m/s): {city.wind.speed}</p>
      <p>Wind direction (degrees): {city.wind.deg}</p>
    </>
  );
};

CityCard.propTypes = {
  city: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  unit: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  unit: state.app.unit,
});

export default withRouter(connect(mapStateToProps)(CityCard));
