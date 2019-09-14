import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Spin } from 'antd';

import LocationContainer from '../LocationContainer/LocationContainer';
import { getWeatherByCityAction } from '../../redux/actions/location';

import { getCityByName } from '../../services/locationService';

import './FormSearch.css';

const { Item } = Form;
const { Search } = Input;

const FormSearch = ({ location, getWeatherByCityAction }) => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  return (
    <div className="formSearch">
      <Form layout="inline">
        <Item>
          <Search
            placeholder="Find location..."
            enterButton="Search"
            onSearch={async (value) => {
              setLoading(true);
              setCities(await getCityByName(value));
              setLoading(false);
            }}
            style={{ width: '300px' }}
            type="text"
          />
        </Item>
        {loading ? (
          <div className="spinner__container">
            <Spin />
          </div>
        ) : (
          cities.length > 0 && <LocationContainer cities={cities} />
        )}
      </Form>
    </div>
  );
};

const mapStateToProps = ({ location }) => ({ location });

const mapDispatchToProps = (dispatch) => ({ getWeatherByCityAction });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSearch);
