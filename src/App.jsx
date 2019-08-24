import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';

const { Content } = Layout;

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Navbar />
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
