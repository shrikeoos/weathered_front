import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Button, message } from 'antd';
import { updateUserService } from '../../services/userService';
import { updateUserAction } from '../../redux/actions/user';

import './Settings.css';

const { Item } = Form;

const updateUser = (validateFields, id, updateUserAction) => {
  validateFields(async (error, values) => {
    if (!error) {
      const newValue = { id, ...values };
      const { data, status } = await updateUserService(newValue);
      if (status === 200) {
        updateUserAction(newValue);
        message.success('user updated');
      } else {
        message.error(data);
      }
    }
  });
};

const Settings = ({ form, id, email, username, updateUserAction }) => {
  const { getFieldDecorator, validateFields } = form;
  return (
    <div className="settings">
      <div className="form">
        <Form
          layout="vertical"
          onSubmit={(event) => {
            event.preventDefault();
            updateUser(validateFields, id, updateUserAction);
          }}
        >
          <Item label="Email">
            {getFieldDecorator('email', { rules: [{ requires: false }], initialValue: email })(
              <Input />
            )}
          </Item>
          <Item label="Username">
            {getFieldDecorator('username', {
              rules: [{ requires: false }],
              initialValue: username,
            })(<Input />)}
          </Item>
          <Item label="New password">
            {getFieldDecorator('newPassword', { rules: [{ requires: false }], initialValue: '' })(
              <Input.Password />
            )}
          </Item>
          <Item label="Type current password">
            {getFieldDecorator('currentPassword', {
              rules: [{ requires: false }],
              initialValue: '',
            })(<Input.Password />)}
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Change
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  );
};

Settings.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  updateUserAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  id: state.user.id,
  email: state.user.email,
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserAction: (user) => dispatch(updateUserAction(user)),
});

export default Form.create({ name: 'settings_form' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Settings)
);
