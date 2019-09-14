import React from 'react';
import DeleteRowButton from '../../DeleteRowButton/DeleteRowButton';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    sorter: (a, b) => a.country.localeCompare(b.city),
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    sorter: (a, b) => a.city.localeCompare(b.city),
    render: (text, { country }) => <Link to={`/country/${country}/city/${text}`}>{text}</Link>,
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
    sorter: (a, b) => a.temperature - b.temperature,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => <DeleteRowButton row={record} />,
  },
];

export default columns;
