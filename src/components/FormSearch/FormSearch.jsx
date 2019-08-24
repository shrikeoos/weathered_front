import React from 'react';
import { Form, Input } from 'antd';

const { Item } = Form;

const FormSearch = () => {
  return (
    <Form>
      <Item>
        <Input placeholder="Search for a place..." />
      </Item>
    </Form>
  );
};

export default FormSearch;
