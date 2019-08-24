import React from 'react';
import { Table } from 'antd';
import columns from './meta/columns';
import locations from '../../data.json';

const getCondition = (temperature) => {
  switch (temperature) {
    case temperature < 20:
      return 'cold';
    case temperature < 30:
      return 'good';
    case temperature < 45:
      return 'alert';
    default:
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
