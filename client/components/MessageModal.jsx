import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

const MessageModal = ({ display }) => {
  return (
    <Modal style={{ display }}>
      <ModalContent>
        <p>Modal Modal Modal</p>
      </ModalContent>
    </Modal>
  );
};

export default MessageModal;
