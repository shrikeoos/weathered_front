import React from 'react';

import { Form, Input, Button, Icon } from 'antd';

const { Item } = Form;

const LoginForm = () => {
  return (
    <Form>
      <Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="username"
        />
      </Item>
      <Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="password"
          type="password"
        />
      </Item>
      <Item>
        <Button type="primary">Log in</Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
