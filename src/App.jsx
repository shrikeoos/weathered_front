import React from 'react';
import { Layout } from 'antd';

import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';

import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Navbar />
        <Content>
          <Provider store={store}>
            <Main />
          </Provider>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
