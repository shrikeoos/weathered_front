import React, { lazy, Suspense } from 'react';
import { Layout } from 'antd';

import { BrowserRouter as Router, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              {/* {store.getState().user.username.length > 0 && <Navbar />} */}
              <Navbar />
              <Content>
                <Suspense fallback={null}>
                  <Route path="/landing" component={Landing} />
                  <PrivateRoute exact path="/">
                    <Main />
                  </PrivateRoute>
                  <PrivateRoute path="/city">
                    <City />
                  </PrivateRoute>
                  <PrivateRoute path="/settings">
                    <Settings />
                  </PrivateRoute>
                </Suspense>
              </Content>
            </Router>
          </PersistGate>
        </Provider>
      </Layout>
    </div>
  );
};

export default App;
