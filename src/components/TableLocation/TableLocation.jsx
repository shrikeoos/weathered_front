import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import columns from './meta/columns';

const TableLocation = ({ table }) => {
  console.log(table);
  return (
    <div>
      <Table columns={columns} dataSource={table.data} />
    </div>
  );
};

const mapStateToProps = ({ table }) => ({ table });

export default connect(mapStateToProps)(TableLocation);
