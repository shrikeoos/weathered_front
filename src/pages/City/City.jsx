import React, { useState, useEffect } from 'react';
import { getWeatherByCoordinates } from '../../services/locationService';
import { Spin } from 'antd';

import { getLatLon, getCityName } from '../../services/locationService';
import CityCard from '../../components/CityCard/CityCard';
import SplashPhoto from '../../components/SplashPhoto/SplashPhoto';

const City = (props) => {
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataCity = async () => {
      const [lat, lon] = getLatLon(props.location.search);
      setCity(await getWeatherByCoordinates(lat, lon));
      setLoading(false);
    };
    getDataCity();
  }, []);

  return loading ? (
    <div
      style={{ height: '93vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Spin />
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '93vh',
        backgroundColor: 'white',
        padding: '50px',
      }}
    >
      <CityCard city={city} />
      <SplashPhoto city={getCityName(props.location.pathname)} />
    </div>
  );
};

export default City;
