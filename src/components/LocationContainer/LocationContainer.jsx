import React from 'react';

import LocationCard from '../LocationCard/LocationCard';

const Locations = ({ location }) => {
  // const displayResult = () => {
  //   return Object.entries(location).length === 0 ? message : <LocationCard location={location} />;
  // };

  return <LocationCard location={location} />;
};

export default Locations;
