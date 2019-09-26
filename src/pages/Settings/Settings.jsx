import React from 'react';
import { Form, Input, Button } from 'antd';

import './Settings.css';

const { Item } = Form;

const Settings = () => (
  <div className="settings">
    <div className="form">
      <Form layout="vertical">
        <Item>
          Email: <Input></Input>
        </Item>
        <Item>
          Username: <Input></Input>
        </Item>
        <Item>
          Password: <Input></Input>
        </Item>
        <Item>
          Change password: <Input></Input>
        </Item>
        <Item>
          <Button type="primary">Save</Button>
        </Item>
      </Form>
    </div>
  </div>
);

export default Settings;
