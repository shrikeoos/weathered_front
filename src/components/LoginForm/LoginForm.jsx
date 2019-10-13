import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Icon, message } from 'antd';
import { loginUserAction } from '../../redux/actions/user';
import { loadTableData } from '../../redux/actions/table';
import { loginUser } from '../../services/userService';

const { Item } = Form;

const logUserIn = (validateFields, loginUserAction, loadTableData, history, setIsLoading) => {
  validateFields(async (error, values) => {
    if (!error) {
      setIsLoading(true);
      const { data, status } = await loginUser(values);
      if (status === 200) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        await loginUserAction({ id: data.id, email: data.email, username: data.username });
        await loadTableData(data.locations);
        setIsLoading(false);
        history.push('/');
      } else {
        message.error(data);
        setIsLoading(false);
      }
    }
  });
};

const LoginForm = ({ form, loginUserAction, loadTableData, history }) => {
  const { validateFields, getFieldDecorator } = form;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        logUserIn(validateFields, loginUserAction, loadTableData, history, setIsLoading);
      }}
    >
      <Item>
        {getFieldDecorator('email', { rules: [{ required: true, message: 'Email required' }] })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="email"
          />
        )}
      </Item>
      <Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Password required' }],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="password"
            visibilityToggle
          />
        )}
      </Item>
      <Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Log in
        </Button>
      </Item>
    </Form>
  );
};

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  loginUserAction: PropTypes.func.isRequired,
  loadTableData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginUserAction: (user) => dispatch(loginUserAction(user)),
  loadTableData: (locations) => dispatch(loadTableData(locations)),
});

export default Form.create({ name: 'login_form' })(
  connect(
    null,
    mapDispatchToProps
  )(withRouter(LoginForm))
);
