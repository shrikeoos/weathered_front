import React, { useState } from 'react';
import { Form, Input } from 'antd';
import Locations from '../Locations/Locations';
import './FormSearch.css';

const { Item } = Form;
const { Search } = Input;

const FormSearch = () => {
  const [locationInput, setLocationInput] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (value) => {
    setLocationInput(value);
    setShowResult(true);
  };

  return (
    <div className="formSearch">
      <Form layout="inline">
        <Item>
          <Search
            placeholder="Find location..."
            enterButton="Search"
            onSearch={handleSearch}
            style={{ width: 200 }}
          />
        </Item>
        {showResult && <Locations locationInput={locationInput} />}
      </Form>
    </div>
  );
};

export default FormSearch;
