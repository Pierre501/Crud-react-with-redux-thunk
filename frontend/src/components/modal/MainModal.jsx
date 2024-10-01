import React from "react";
import Modal from "react-bootstrap/Modal";

function MainModal(props) {
  const { isShow, onClose, size, formComponent } = props;

  return (
    <Modal
      size={size}
      show={isShow}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body className="p-4">{formComponent}</Modal.Body>
    </Modal>
  );
}

export default MainModal;
