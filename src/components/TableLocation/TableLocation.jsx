import React from 'react';
import { Table } from 'antd';
import columns from './meta/columns';

const Locations = () => {
  return (
    <div>
      <Table columns={columns} />
    </div>
  );
};

export default Locations;
