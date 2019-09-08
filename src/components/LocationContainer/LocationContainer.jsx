import React from 'react';
import {connect} from 'react-redux';
import LocationCard from '../LocationCard/LocationCard';

const Locations = ({ location }) => {
  return Object.entries(location.data).length === 0 ? 'Not found' : <LocationCard />;
};

const mapStateToProps = ({location}) => {
  return {
    location
  }
}

export default connect(mapStateToProps)(Locations);
