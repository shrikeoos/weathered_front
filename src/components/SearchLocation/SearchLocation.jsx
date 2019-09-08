import React from 'react';
import FormSearch from '../FormSearch/FormSearch';
import Map from '../Map/Map';
import './SearchLocation.css';

const SearchLocation = () => {

  return (
    <div className="searchLocation">
      <FormSearch />
      <Map  />
    </div>
  );
};

export default SearchLocation;
