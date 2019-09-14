import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Spin } from 'antd';

import LocationContainer from '../LocationContainer/LocationContainer';

import { getCityByNameAction } from '../../redux/actions/location';

import './FormSearch.css';

const { Item } = Form;
const { Search } = Input;

const FormSearch = ({ cities, getCityByNameAction }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="formSearch">
      <Form layout="inline">
        <Item>
          <Search
            placeholder="Find location..."
            enterButton="Search"
            onSearch={async (value) => {
              setLoading(true);
              await getCityByNameAction(value);
              setLoading(false);
            }}
            style={{ width: 'auto' }}
            type="text"
          />
        </Item>
        {loading ? (
          <div className="spinner__container">
            <Spin />
          </div>
        ) : (
          cities.length > 0 && <LocationContainer />
        )}
      </Form>
    </div>
  );
};

const mapStateToProps = ({ location }) => ({ cities: location.cities });

export default connect(
  mapStateToProps,
  { getCityByNameAction }
)(FormSearch);
