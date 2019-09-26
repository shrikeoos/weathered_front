import React from 'react';
import { Button, Icon } from 'antd';

//TODO
const deleteRow = (row) => {};

const DeleteRowButton = () => (
  <Button onClick={(row) => deleteRow(row)} type="danger" size="small" ghost>
    <Icon type="delete" />
  </Button>
);

export default DeleteRowButton;
