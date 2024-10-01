import {
  createStudentFailure,
  createStudentRequest,
  createStudentSuccess,
  deleteStudentFailure,
  deleteStudentRequest,
  deleteStudentSuccess,
  fetchStudentsFailure,
  fetchStudentsRequest,
  fetchStudentsSuccess,
  getCurrentStudentFailure,
  getCurrentStudentRequest,
  getCurrentStudentSuccess,
  updateStudentFailure,
  updateStudentRequest,
  updateStudentSuccess,
} from "../store/actions/studentsAction";
import { createData, fetchData } from "./fetchData";

export const fetchStudents = () => async (dispatch) => {
  dispatch(fetchStudentsRequest());
  try {
    const response = await fetchData(
      `${process.env.REACT_APP_API_URL}/students`,
      "GET"
    );
    const dataStudents = await response.data;
    dispatch(fetchStudentsSuccess(dataStudents));
  } catch (error) {
    dispatch(fetchStudentsFailure(error));
  }
};

export const createStudents = (student) => async (dispatch) => {
  dispatch(createStudentRequest());
  try {
    const response = await createData(
      `${process.env.REACT_APP_API_URL}/students`,
      student,
      "POST"
    );
    const dataStudents = await response.data;
    dispatch(createStudentSuccess(dataStudents));
  } catch (error) {
    dispatch(createStudentFailure(error));
  }
};

export const deleteStudents = (id) => async (dispatch) => {
  dispatch(deleteStudentRequest());
  try {
    await fetchData(
      `${process.env.REACT_APP_API_URL}/students/${id}`,
      "DELETE"
    );
    dispatch(deleteStudentSuccess(id));
  } catch (error) {
    dispatch(deleteStudentFailure(error));
  }
};

export const updateStudents = (id, studentData) => async (dispatch) => {
  dispatch(updateStudentRequest());
  try {
    const response = await createData(
      `${process.env.REACT_APP_API_URL}/students/${id}`,
      studentData,
      "PUT"
    );
    const dataStudents = await response.data;
    dispatch(updateStudentSuccess(dataStudents));
  } catch (error) {
    dispatch(updateStudentFailure(error));
  }
};

export const getCurrentStudents = (student) => (dispatch) => {
  dispatch(getCurrentStudentRequest());
  try {
    dispatch(getCurrentStudentSuccess(student));
  } catch (error) {
    dispatch(getCurrentStudentFailure(error));
  }
};

export const handleCurrentStudents = (student, onClick) => (dispatch) => {
  onClick();
  dispatch(getCurrentStudents(student));
};

export const getValueFormData = (e) => {
  const formData = new FormData(e.target);
  const student = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    dateOfBirth: formData.get("dateOfBirth"),
    placeOfBirth: formData.get("placeOfBirth"),
    registrationNumber: formData.get("registrationNumber"),
    promotion: formData.get("promotion"),
  };
  return student;
};
