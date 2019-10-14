import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../../utils/appUtils';
import { getRightTemperature } from '../../../utils/temperatureUtils';
import DeleteRowButton from '../../DeleteRowButton/DeleteRowButton';
import { getStatus } from '../../../services/weatherService';

const getColumns = (unit) => [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    sorter: (a, b) => a.country.localeCompare(b.city),
    render: (text) => capitalize(text),
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    sorter: (a, b) => a.city.localeCompare(b.city),
    render: (text, { coord }) => (
      <Link to={`/city/${text}?lat=${coord.lat}&lon=${coord.lon}`}>{capitalize(text)}</Link>
    ),
  },
  {
    title: `Temperature (°${unit.toUpperCase()})`,
    dataIndex: 'temperature',
    key: 'temperature',
    sorter: (a, b) => a.temperature - b.temperature,
    render: (text) => getRightTemperature(unit, text),
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
    render: (text) => getStatus(parseFloat(text)),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => <DeleteRowButton row={record} />,
  },
];

export default getColumns;
