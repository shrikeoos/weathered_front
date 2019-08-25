import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LocationCard from '../LocationCard/LocationCard';

const Locations = ({ locationInput }) => {
  const [fetching, setFetching] = useState(false);
  const [location, setLocation] = useState({});

  useEffect(() => {
    const locationFetch = async () => {
      setFetching(true);
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setLocation(data);
      setFetching(false);
    };
    locationFetch();
  }, [locationInput]);

  return fetching ? <div>Loading...</div> : <LocationCard location={location} />;
};

export default Locations;
