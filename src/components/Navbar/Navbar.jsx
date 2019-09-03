import React from 'react';
import { Menu } from 'antd';

const { Item } = Menu;

const Navbar = () => {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Item key="1">Locations</Item>
    </Menu>
  );
};

export default Navbar;
