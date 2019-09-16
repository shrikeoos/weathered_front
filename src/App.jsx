import React from 'react';
import { Layout } from 'antd';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import City from './pages/City/City';

import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Content>
              <Route exact path="/" component={Main} />
              <Route path="/city" component={City} />
            </Content>
          </Router>
        </Provider>
      </Layout>
    </div>
  );
};

export default App;
