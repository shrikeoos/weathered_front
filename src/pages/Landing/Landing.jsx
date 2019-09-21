import React from 'react';
import { Tabs } from 'antd';
import './Landing.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const { TabPane } = Tabs;

const Landing = () => {
  return (
    <div className="landing">
      <h1>Welcome to weathered</h1>
      <Tabs
        defaultActiveKey="1"
        size="default"
        style={{
          width: '40%',
          height: 'auto',
          padding: '12px',
        }}
      >
        <TabPane tab="Login" key="login">
          <LoginForm />
        </TabPane>
        <TabPane tab="Register" key="register">
          <RegisterForm />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Landing;
