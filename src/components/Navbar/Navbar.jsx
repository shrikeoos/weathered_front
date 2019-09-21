import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Switch } from 'antd';

import { setCelsius, setFahrenheit } from '../../redux/actions/app';

import UserControl from '../UserControl/UserControl';

import './Navbar.css';

const { Item } = Menu;

const Navbar = ({ setCelsius, setFahrenheit }) => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }} theme="dark">
      <Item key="1" style={{ float: 'left' }}>
        <Link to="/">Home</Link>
      </Item>
      <div className="navbar__user__control">
        <Switch
          checkedChildren="°C"
          unCheckedChildren="°F"
          defaultChecked
          onChange={(event) => (event ? setCelsius : setFahrenheit)}
        ></Switch>
        <UserControl />
      </div>
    </Menu>
  );
};

export default connect(
  null,
  { setCelsius, setFahrenheit }
)(Navbar);
