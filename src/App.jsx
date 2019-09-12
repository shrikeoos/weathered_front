import React from 'react';
import { Layout } from 'antd';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Router>
          <Navbar />
          <Content>
            <Provider store={store}>
              <Route path="/" component={Main} />
            </Provider>
          </Content>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
