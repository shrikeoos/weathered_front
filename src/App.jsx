import React, { lazy, Suspense } from 'react';
import { Layout } from 'antd';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/Navbar/Navbar';
import './App.css';

const Landing = lazy(() => import('./pages/Landing/Landing'));
const Main = lazy(() => import('./pages/Main/Main'));
const City = lazy(() => import('./pages/City/City'));
const Settings = lazy(() => import('./pages/Settings/Settings'));

const { Content } = Layout;

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Provider store={store}>
          <Router>
            {store.getState().user.username.length > 0 && <Navbar />}
            {/* <Navbar /> */}
            <Content>
              <Suspense fallback={<> </>}>
                <Route path="/landing" component={Landing} />
                <Route exact path="/" component={Main} />
                <Route path="/city" component={City} />
                <Route path="/settings" component={Settings} />
              </Suspense>
            </Content>
          </Router>
        </Provider>
      </Layout>
    </div>
  );
};

export default App;
