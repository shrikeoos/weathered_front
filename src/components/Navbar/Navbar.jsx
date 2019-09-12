import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Item } = Menu;

const Navbar = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
      <Item key="1">
        <Link to="/">Locations</Link>
      </Item>
    </Menu>
  );
};

export default Navbar;
