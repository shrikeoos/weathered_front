import React from 'react';

import LocationCard from '../LocationCard/LocationCard';

const Locations = ({ location }) => {
  return Object.entries(location).length === 0 ? 'Not found' : <LocationCard location={location} />;
};

export default Locations;
