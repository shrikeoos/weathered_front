import React from 'react';
import { Form, Icon, Button, Input } from 'antd';

const { Item } = Form;

const RegisterForm = () => {
  return (
    <Form>
      <Item>
        <Input
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="email"
        ></Input>
      </Item>
      <Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="username"
        ></Input>
      </Item>
      <Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="password"
        ></Input>
      </Item>
      <Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="confirm password"
        ></Input>
      </Item>
      <Item>
        <Button type="primary">Register</Button>
      </Item>
    </Form>
  );
};

export default RegisterForm;
