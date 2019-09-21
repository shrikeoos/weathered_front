import React from 'react';
import { Layout } from 'antd';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import Landing from './pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import City from './pages/City/City';
import Settings from './pages/Settings/Settings';

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
              <Route path="/landing" component={Landing} />
              <Route exact path="/" component={Main} />
              <Route path="/city" component={City} />
              <Route path="/settings" component={Settings} />
            </Content>
          </Router>
        </Provider>
      </Layout>
    </div>
  );
};

export default App;
