import React from 'react';
import { connect } from 'react-redux';
import LocationCard from '../LocationCard/LocationCard';
import './LocationContainer.css';

const Locations = ({ cities }) => {
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

const mapStateToProps = ({ location }) => ({ cities: location.cities });

export default connect(mapStateToProps)(Locations);
