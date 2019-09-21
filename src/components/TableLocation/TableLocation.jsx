import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import getColumns from './meta/columns';

const TableLocation = ({ table, unit }) => {
  return (
    <div>
      <Table columns={getColumns(unit)} dataSource={table.data} />
    </div>
  );
};

const mapStateToProps = (state) => ({ table: state.table, unit: state.app.unit });

export default connect(mapStateToProps)(TableLocation);
