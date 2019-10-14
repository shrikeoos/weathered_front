import React, { lazy, Suspense } from 'react';
import { Layout } from 'antd';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

import Navbar from './components/Navbar/Navbar';
import './App.css';

const Landing = lazy(() => import('./pages/Landing/Landing'));
const Main = lazy(() => import('./pages/Main/Main'));
const City = lazy(() => import('./pages/City/City'));
const Settings = lazy(() => import('./pages/Settings/Settings'));

const { Content } = Layout;

export const history = createBrowserHistory();

const MainRoute = () => (
  <>
    <Navbar />
    <Layout>
      <Content>
        <PrivateRoute exact path="/">
          <Main />
        </PrivateRoute>
        <PrivateRoute path="/city">
          <City />
        </PrivateRoute>
        <PrivateRoute path="/settings">
          <Settings />
        </PrivateRoute>
      </Content>
    </Layout>
  </>
);

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Suspense fallback={null}>
              <Switch>
                <Route exact path="/(landing)" component={Landing} />
                <Route component={MainRoute} />
              </Switch>
            </Suspense>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
