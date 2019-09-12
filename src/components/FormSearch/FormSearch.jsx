import React, { useState } from 'react';
import {connect} from 'react-redux';
import { Form, Input, Spin } from 'antd';

import LocationContainer from '../LocationContainer/LocationContainer';
import {searchLocationByNameAction} from '../../redux/actions/location'

import './FormSearch.css';

const { Item } = Form;
const { Search } = Input;

const FormSearch = ({location, searchLocationByNameAction}) => {
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
              await searchLocationByNameAction(value)
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
          Object.entries(location.data).length > 0 && <LocationContainer />
        )}
      </Form>
    </div>
  );
};

const mapStateToProps = ({location}) => ({location})

export default connect(mapStateToProps, {searchLocationByNameAction})(FormSearch);
