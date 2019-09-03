import React, { useState } from 'react';
import { Form, Input } from 'antd';
import LocationContainer from '../LocationContainer/LocationContainer';
import './FormSearch.css';

const { Item } = Form;
const { Search } = Input;

const FormSearch = ({ location, setLocation }) => {
  const [locationInput, setLocationInput] = useState('');

  return (
    <div className="formSearch">
      <Form layout="inline">
        <Item>
          <Search
            placeholder="Find location..."
            enterButton="Search"
            onSearch={(value) => setLocationInput(value)}
            style={{width: '300px'}}
          />
        </Item>
        <LocationContainer locationInput={locationInput} location={location} setLocation={setLocation} />
      </Form>
    </div>
  );
};

export default FormSearch;
