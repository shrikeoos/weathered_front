import React from 'react';
import DeleteRowButton from '../../DeleteRowButton/DeleteRowButton';

const columns = [
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    sorter: (a, b) => a.city.localeCompare(b.city),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Temperature',
    dataIndex: 'temperature',
    key: 'temperature',
    sorter: (a, b) => a.temperature - b.temperature,
  },
  {
    title: 'Condition',
    dataIndex: 'condition',
    key: 'condition',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => <DeleteRowButton row={record} />,
  },
];

export default columns;
