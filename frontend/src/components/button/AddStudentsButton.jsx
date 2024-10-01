import React from "react";
import { PlusLg } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import MainModal from "../modal/MainModal";
import AddStudentsForm from "../form/AddStudentsForm";

function AddStudentsButton(props) {
  const { isShow, onShow, onClose, onSubmit } = props;

  return (
    <>
      <div>
        <Button variant="success" onClick={onShow}>
          <PlusLg /> Ajouter
        </Button>
      </div>
      <MainModal
        size="xl"
        isShow={isShow}
        onClose={onClose}
        formComponent={
          <AddStudentsForm onSubmit={onSubmit} onClose={onClose} />
        }
      />
    </>
  );
}

export default AddStudentsButton;
