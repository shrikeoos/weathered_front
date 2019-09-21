import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Main.css';

import { Modal, Button, Spin } from 'antd';
import { loadTableData } from '../../redux/actions/table';

import TableLocation from '../../components/TableLocation/TableLocation';
import SearchLocation from '../../components/SearchLocation/SearchLocation';
import data from '../../data.json';

const Main = ({ loadTableData, unit }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTableDataHolder = async () => {
      await loadTableData(data, unit);
      setLoading(false);
    };
    loadTableDataHolder();
  });

  return loading ? (
    <div className="main__spinner">
      <Spin />
    </div>
  ) : (
    <div className="main">
      <Button
        type="primary"
        size="large"
        onClick={() => setShowModal(true)}
        className="main__button"
      >
        Add location
      </Button>
      <Modal
        visible={showModal}
        footer={[
          <Button key="buttonModal" onClick={() => setShowModal(false)}>
            close
          </Button>,
        ]}
        width="10"
        bodyStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
        }}
        closable={false}
        mask
        maskClosable
        onCancel={() => setShowModal(false)}
      >
        <SearchLocation />
      </Modal>
      <TableLocation />
    </div>
  );
};

const mapStateToProps = (state) => ({
  unit: state.app.unit,
});

export default connect(
  mapStateToProps,
  { loadTableData }
)(Main);
