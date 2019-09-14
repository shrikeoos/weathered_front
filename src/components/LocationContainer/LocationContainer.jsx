import React from 'react';
import { connect } from 'react-redux';
import LocationCard from '../LocationCard/LocationCard';

const Locations = ({ cities }) => {
  return cities.length === 0
    ? 'Not found...'
    : cities.map((city) => <LocationCard key={'city'} city={city} />);
};

const mapStateToProps = ({ location }) => {
  return {
    location,
  };
};

export default connect(mapStateToProps)(Locations);
