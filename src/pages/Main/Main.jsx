import React, { useState } from 'react';
import './Main.css';

import { Modal, Button } from 'antd';

import TableLocation from '../../components/TableLocation/TableLocation';
import SearchLocation from '../../components/SearchLocation/SearchLocation';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
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

export default Main;
