import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Main />
      </Content>
    </Layout>
  );
};

export default App;
