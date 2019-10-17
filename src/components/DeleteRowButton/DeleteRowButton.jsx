import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

import { deleteLocationFromUser } from '../../services/locationService';
import { deleteLocationAction } from '../../redux/actions/table';

const DeleteRowButton = ({ row, userId, deleteLocationAction }) => {
  const deleteLocation = useCallback(async () => {
    const confirm = window.confirm(`Do you really want to delete ${row.city}`);
    if (confirm) {
      await deleteLocationFromUser(row.id, userId);
      await deleteLocationAction(row.id);
    }
  }, [row]);

  return (
    <Button onClick={() => deleteLocation()} type="danger" size="small" ghost>
      <Icon type="delete" />
    </Button>
  );
};

DeleteRowButton.propTypes = {
  row: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  deleteLocationAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  deleteLocationAction: (locationId) => dispatch(deleteLocationAction(locationId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteRowButton);
