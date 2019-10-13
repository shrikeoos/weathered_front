import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Button, Input, message } from 'antd';
import { createUser } from '../../services/userService';

const { Item } = Form;

const registerUser = (validateFields) => {
  validateFields(async (error, values) => {
    if (!error) {
      const { data, status } = await createUser(values);
      if (status === 201) {
        message.success(data);
      } else {
        message.error(data);
      }
    }
  });
};

const RegisterForm = ({ form }) => {
  const { validateFields, getFieldDecorator, getFieldValue } = form;

  const comparePassword = (rule, value, callback) => {
    if (value && value !== getFieldValue('password')) {
      callback('Passwords do not match');
    } else {
      callback();
    }
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        registerUser(validateFields);
      }}
    >
      <Item>
        {getFieldDecorator('email', { rules: [{ required: true, message: 'Email required' }] })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="email"
          />
        )}
      </Item>
      <Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username required' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="username"
          />
        )}
      </Item>
      <Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Password required' }],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="password"
            visibilityToggle
          />
        )}
      </Item>
      <Item>
        {getFieldDecorator('confirm', {
          rules: [
            { required: true, message: 'Please confirm password' },
            { validator: comparePassword },
          ],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="confirm password"
            visibilityToggle
          />
        )}
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Item>
    </Form>
  );
};

RegisterForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'register_form' })(RegisterForm);
