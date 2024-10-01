import React, { useState } from "react";
import AddStudentsButton from "../button/AddStudentsButton";
import { useDispatch } from "react-redux";
import { createStudents, getValueFormData } from "../../utils/crudMethod";

function AddStudentsButtonContainer() {
  const [isShow, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = getValueFormData(e);
    dispatch(createStudents(student));
    e.target.reset();
    handleClose();
  };

  return (
    <AddStudentsButton
      isShow={isShow}
      onShow={handleShow}
      onSubmit={handleSubmit}
      onClose={handleClose}
    />
  );
}

export default AddStudentsButtonContainer;
