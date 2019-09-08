import React, { useState } from 'react';
import {connect} from 'react-redux';
import { Form, Input, Spin } from 'antd';

import LocationContainer from '../LocationContainer/LocationContainer';
import {searchLocationAction} from '../../redux/actions/location'


import './FormSearch.css';

const { Item } = Form;
const { Search } = Input;

const FormSearch = ({searchLocationAction}) => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  return (
    <div className="formSearch">
      <Form layout="inline">
        <Item>
          <Search
            placeholder="Find location..."
            enterButton="Search"
            onSearch={async (value) => {
              setLoading(true);
              await searchLocationAction(value)
              setInput(value);
              setLoading(false);
            }}
            style={{ width: '300px' }}
          />
        </Item>
        {loading ? (
          <div className="spinner__container">
            <Spin />
          </div>
        ) : (
          input.length > 0 && <LocationContainer />
        )}
      </Form>
    </div>
  );
};

export default connect(null, {searchLocationAction})(FormSearch);
