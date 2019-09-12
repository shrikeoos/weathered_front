import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Main.css';

import { Modal, Button, Spin } from 'antd';
import { loadTableData } from '../../redux/actions/table';

import TableLocation from '../../components/TableLocation/TableLocation';
import SearchLocation from '../../components/SearchLocation/SearchLocation';
import data from '../../data.json';

const Main = ({ loadTableData }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTableDataHolder = async () => {
      await loadTableData(data);
      setLoading(false);
    };
    loadTableDataHolder();
  });

  return loading ? (
    <Spin />
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
        bodyStyle={{ height: '700px' }}
        title="Look for a place"
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

export default connect(
  null,
  { loadTableData }
)(Main);
