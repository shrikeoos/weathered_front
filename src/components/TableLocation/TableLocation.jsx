import React from 'react';
import { Table } from 'antd';
import columns from './meta/columns';
import locations from '../../data.json';

const getCondition = (temperature) => {
  if (temperature < 15) {
    return 'cold';
  } else if (temperature < 25) {
    return 'good';
  } else if (temperature < 35) {
    return 'hot';
  } else if (temperature < 45) {
    return 'warning';
  } else {
    return 'danger';
  }
};

const getData = (locations) =>
  locations.map((location) => {
    const temperature = Math.floor(Math.random() * 101);
    return {
      key: location,
      name: location,
      temperature,
      condition: getCondition(temperature),
    };
  });

const Locations = () => {
  return (
    <div>
      <Table columns={columns} dataSource={getData(locations)} />
    </div>
  );
};

export default Locations;
