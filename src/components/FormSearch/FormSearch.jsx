import React, { useState } from 'react';
import { Form, Input, Spin } from 'antd';
import LocationContainer from '../LocationContainer/LocationContainer';
import searchLocation from '../../services/searchLocation';
import './FormSearch.css';

const { Item } = Form;
const { Search } = Input;

const FormSearch = ({ location, setLocation }) => {
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
              setLocation(await searchLocation(value));
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
          input.length > 0 && <LocationContainer location={location} />
        )}
      </Form>
    </div>
  );
};

export default FormSearch;
