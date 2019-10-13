import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Avatar } from 'antd';
import { logoutUserAction } from '../../redux/actions/user';
import { emptyTableData } from '../../redux/actions/table';
import { getReducedUsername } from '../../utils/userUtils';
import './UserControl.css';

const logUserOut = (logoutUser, emptyTable) => {
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('accessToken');
  logoutUser();
  emptyTable();
};

const getMenu = (logoutUser, emptyTable) => (
  <Menu>
    <Menu.Item key="settings">
      <Link to="/settings">Settings</Link>
    </Menu.Item>
    <Menu.Item key="logout">
      <Link to="/landing" onClick={() => logUserOut(logoutUser, emptyTable)}>
        Logout
      </Link>
    </Menu.Item>
  </Menu>
);

const UserControl = ({ username, logoutUser, emptyTable }) => {
  return (
    <div className="userControl">
      <Dropdown overlay={getMenu(logoutUser, emptyTable)}>
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
  logoutUser: PropTypes.func.isRequired,
  emptyTable: PropTypes.func.isRequired,
};

const mapStatetoProps = (state) => ({
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUserAction()),
  emptyTable: () => dispatch(emptyTableData()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(UserControl);
