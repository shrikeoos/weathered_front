import React from 'react';
import DeleteRowButton from '../../DeleteRowButton/DeleteRowButton';
import { Link } from 'react-router-dom';

const getColumns = (unit) => [
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
    render: (text, { coord }) => (
      <Link to={`/city/${text}?lat=${coord.lat}&lon=${coord.lon}`}>{text}</Link>
    ),
  },
  {
    title: `Temperature (°${unit.toUpperCase()})`,
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

export default getColumns;
