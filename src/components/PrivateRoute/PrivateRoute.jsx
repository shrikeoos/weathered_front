import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      rest.username.length > 0 ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/landing',
            state: { from: location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(PrivateRoute);
