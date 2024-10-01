import React, { useEffect, useState } from "react";
import MainTable from "../table/MainTable";
import HeadTable from "../table/students/HeadTable";
import BodyTable from "../table/students/BodyTable";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentStudent,
  selectStudents,
} from "../../store/selectors/studentsSelector";
import DeleteStudentsForm from "../form/DeleteStudentsForm";
import {
  fetchStudents,
  getValueFormData,
  updateStudents,
} from "../../utils/crudMethod";
import Typography from "../others/Typography";
import UpdateStudentsForm from "../form/UpdateStudentsForm";

function StudentsTableContainer() {
  const [isShowModalDelete, setShowModalDelete] = useState(false);
  const [isShowModalUpdate, setShowModalUpdate] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);
  const currentStudent = useSelector(selectCurrentStudent);
  const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalDelete = () => setShowModalDelete(true);
  const handleCloseModalUpdate = () => setShowModalUpdate(false);
  const handleShowModalUpdate = () => setShowModalUpdate(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = getValueFormData(e);
    dispatch(updateStudents(currentStudent.id, student));
    e.target.reset();
    handleCloseModalUpdate();
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <MainTable
      headTableComponent={<HeadTable />}
      bodyTableComponent={
        <BodyTable
          data={students}
          onClickModalDelete={handleShowModalDelete}
          onClickModalUpdate={handleShowModalUpdate}
          dispatch={dispatch}
        />
      }
      isShowModalDelete={isShowModalDelete}
      onCloseModalDelete={handleCloseModalDelete}
      isShowModalUpdate={isShowModalUpdate}
      onCloseModalUpdate={handleCloseModalUpdate}
      deleteComponent={
        <DeleteStudentsForm
          subTitle={
            <Typography
              title="Souhaitez-vous vraiment supprimer l'info à propos de "
              subTitle={`${currentStudent?.firstName} ${currentStudent?.lastName}`}
            />
          }
          onClose={handleCloseModalDelete}
          student={currentStudent}
          dispatch={dispatch}
        />
      }
      updateComponent={
        <UpdateStudentsForm
          onSubmit={handleSubmit}
          onClose={handleCloseModalUpdate}
          student={currentStudent}
        />
      }
    />
  );
}

export default StudentsTableContainer;
