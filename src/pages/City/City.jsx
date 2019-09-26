import React, { useState, useEffect } from 'react';
import { getWeatherByCoordinates } from '../../services/locationService';
import { Row, Col, Spin } from 'antd';

import { getLatLon, getCityName } from '../../utils/locationUtils';
import CityCard from '../../components/CityCard/CityCard';
import SplashPhoto from '../../components/SplashPhoto/SplashPhoto';

import './City.css';

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
    <div className="city__spinner">
      <Spin />
    </div>
  ) : (
    <div className="city">
      <Row type="flex" justify="center">
        <Col xl={6} lg={12}>
          <CityCard city={city} />
        </Col>
        <Col xl={12} lg={12}>
          <SplashPhoto city={getCityName(props.location.pathname)} />
        </Col>
      </Row>
    </div>
  );
};

export default City;
