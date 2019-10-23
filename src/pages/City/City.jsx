import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Spin } from 'antd';

import CityCard from '../../components/CityCard/CityCard';
import SplashPhoto from '../../components/SplashPhoto/SplashPhoto';

import { getWeatherByCoordinates } from '../../services/locationService';
import { getLatLon, getCityName } from '../../utils/locationUtils';

import './City.css';

const City = ({ location }) => {
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataCity = async () => {
      const [lat, lon] = getLatLon(location.search);
      setCity(await getWeatherByCoordinates(lat, lon));
      setLoading(false);
    };
    getDataCity();
  }, []);

  return loading ? (
    <div className="citySpinner">
      <Spin />
    </div>
  ) : (
    <div className="city">
      <Row type="flex" justify="center">
        <Col xl={6} lg={12}>
          <CityCard city={city} />
        </Col>
        <Col xl={12} lg={12}>
          <SplashPhoto city={getCityName(location.pathname)} />
        </Col>
      </Row>
    </div>
  );
};

City.propTypes = {
  location: PropTypes.object.isRequired, // location comes from react-router-dom
};

export default withRouter(City);
