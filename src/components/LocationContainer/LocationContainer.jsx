import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationCard from '../LocationCard/LocationCard';
import './LocationContainer.css';

const LocationContainer = ({ cities }) => {
  return (
    <div className="locationContainer">
      {cities.length === 0
        ? 'Not found...'
        : cities.map((city, index) => (
            <div key={city.id}>
              <LocationCard city={city} />
              {index < cities.length - 1 && <div style={{ marginBottom: '12px' }}></div>}
            </div>
          ))}
    </div>
  );
};

LocationContainer.propTypes = {
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = ({ location }) => ({ cities: location.cities });

export default connect(mapStateToProps)(LocationContainer);
