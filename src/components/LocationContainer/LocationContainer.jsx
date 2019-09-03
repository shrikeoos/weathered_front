import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LocationCard from '../LocationCard/LocationCard';

const Locations = ({ locationInput, location, setLocation }) => {
  const [fetching, setFetching] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const locationFetch = async () => {
      setFetching(true);
      try {
        const { data } = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
        );
        setLocation(data);
      } catch (error) {
        setMessage('Not found');
      }
      setFetching(false);
    };
    locationFetch();
  }, [locationInput]);

  const displayResult = () => {
    return Object.entries(location).length === 0 ? message : <LocationCard location={location} />;
  };

  return fetching ? <div>Please wait...</div> : displayResult();
};

export default Locations;
