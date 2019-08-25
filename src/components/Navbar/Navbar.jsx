import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const { Item } = Menu;

const Navbar = () => {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Item key="1">Locations</Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
