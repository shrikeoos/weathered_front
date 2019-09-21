import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Switch } from 'antd';

import './Navbar.css';

const { Item } = Menu;

const Navbar = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }} theme="dark">
      <Item key="1" style={{ float: 'left' }}>
        <Link to="/">Home</Link>
      </Item>
      <div className="navbar__user__control">
        <div>
          <Switch checkedChildren="°C" unCheckedChildren="°F" defaultChecked></Switch>
        </div>
        <div>user</div>
      </div>
    </Menu>
  );
};

export default Navbar;
