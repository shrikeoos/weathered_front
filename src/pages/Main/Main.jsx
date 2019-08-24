import React from 'react';
import './Main.css';
import TableLocation from '../../components/TableLocation/TableLocation';
import FormSearch from '../../components/FormSearch/FormSearch';

const Main = () => {
  return (
    <div className="main">
      <TableLocation />
      <FormSearch />
    </div>
  );
};

export default Main;
