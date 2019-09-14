import React from 'react';
import LocationCard from '../LocationCard/LocationCard';
import './LocationContainer.css';

const Locations = ({ cities }) => {
  return (
    <div className="locationContainer">
      {cities.length === 0
        ? 'Not found...'
        : cities.map((city, index) => (
            <div>
              <LocationCard key={city.id} city={city} />
              {index < cities.length && <div style={{ marginBottom: '12px' }}></div>}
            </div>
          ))}
    </div>
  );
};

export default Locations;
