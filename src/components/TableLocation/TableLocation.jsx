import React from 'react';
import { Table, Tag } from 'antd';
import columns from './meta/columns';
import locations from '../../data.json';

const getCondition = (temperature) => {
  if (temperature < 15) {
    return <Tag color="cyan">cold</Tag>;
  } else if (temperature < 25) {
    return <Tag color="green">good</Tag>;
  } else if (temperature < 35) {
    return <Tag color="orange">hot</Tag>;
  } else if (temperature < 45) {
    return <Tag color="volcano">warning</Tag>;
  } else {
    return <Tag color="red">danger</Tag>;
  }
};

const getData = (locations) =>
  locations.map((location) => {
    const temperature = Math.floor(Math.random() * 101);
    return {
      key: location,
      name: location,
      temperature,
      status: getCondition(temperature),
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
