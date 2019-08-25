import React from 'react';
import './Main.css';
import TableLocation from '../../components/TableLocation/TableLocation';
import SearchLocation from '../../components/SearchLocation/SearchLocation';

const Main = () => {
  return (
    <div className="main">
      <TableLocation />
      <SearchLocation />
    </div>
  );
};

export default Main;
