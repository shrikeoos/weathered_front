import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Avatar } from 'antd';
import './UserControl.css';

const menu = (
  <Menu>
    <Menu.Item key="settings">
      <Link to="/settings">Settings</Link>
    </Menu.Item>
    <Menu.Item key="logout">
      <Link to="/login">Logout</Link>
    </Menu.Item>
  </Menu>
);

const UserControl = () => {
  return (
    <div className="userControl">
      <Dropdown overlay={menu}>
        <Avatar style={{ backgroundColor: 'blue' }} size="large">
          User
        </Avatar>
      </Dropdown>
    </div>
  );
};

export default UserControl;
