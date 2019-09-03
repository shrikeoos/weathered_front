import React, { useState } from 'react';
import FormSearch from '../FormSearch/FormSearch';
import Map from '../Map/Map';
import './SearchLocation.css';

const SearchLocation = () => {
  const [location, setLocation] = useState({});

  return (
    <div className="searchLocation">
      <FormSearch location={location} setLocation={setLocation} />
      <Map location={location} setLocation={setLocation} />
    </div>
  );
};

export default SearchLocation;
