import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Avatar } from 'antd';
import { logoutUser } from '../../services/userService';
import { logoutUserAction } from '../../redux/actions/user';
import { getReducedUsername } from '../../utils/userUtils';
import './UserControl.css';

const getMenu = () => (
  <Menu>
    <Menu.Item key="settings">
      <Link to="/settings">Settings</Link>
    </Menu.Item>
    <Menu.Item key="logout">
      <Link to="/landing" onClick={() => logoutUser()}>
        Logout
      </Link>
    </Menu.Item>
  </Menu>
);

const UserControl = ({ username }) => {
  return (
    <div className="userControl">
      <Dropdown overlay={getMenu()}>
        <a href="#">
          <Avatar style={{ backgroundColor: 'orange' }} size="large">
            {getReducedUsername(username)}
          </Avatar>
        </a>
      </Dropdown>
    </div>
  );
};

UserControl.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStatetoProps = (state) => ({
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUserAction()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(UserControl);
