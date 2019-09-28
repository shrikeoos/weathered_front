import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import getColumns from './meta/columns';

const TableLocation = ({ table, unit }) => (
  <div>
    <Table columns={getColumns(unit)} dataSource={table.data} />
  </div>
);

TableLocation.propTypes = {
  table: PropTypes.object.isRequired,
  unit: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ table: state.table, unit: state.app.unit });

export default connect(mapStateToProps)(TableLocation);
