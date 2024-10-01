import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAILURE,
  DELETE_STUDENT_FAILURE,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  FETCH_STUDENT_FAILURE,
  FETCH_STUDENT_REQUEST,
  FETCH_STUDENT_SUCCESS,
  GET_CURRENT_STUDENT_FAILURE,
  GET_CURRENT_STUDENT_REQUEST,
  GET_CURRENT_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
} from "../reducer/studentsReducer";

export const fetchStudentsRequest = () => {
  return { type: FETCH_STUDENT_REQUEST };
};

export const fetchStudentsSuccess = (students) => {
  return {
    type: FETCH_STUDENT_SUCCESS,
    payload: students,
  };
};

export const fetchStudentsFailure = (error) => {
  return {
    type: FETCH_STUDENT_FAILURE,
    payload: error,
  };
};

export const createStudentRequest = () => {
  return {
    type: CREATE_STUDENT_REQUEST,
  };
};

export const createStudentSuccess = (students) => {
  return {
    type: CREATE_STUDENT_SUCCESS,
    payload: students,
  };
};

export const createStudentFailure = (error) => {
  return {
    type: CREATE_STUDENT_FAILURE,
    payload: error,
  };
};

export const deleteStudentRequest = () => {
  return {
    type: DELETE_STUDENT_REQUEST,
  };
};

export const deleteStudentSuccess = (id) => {
  return {
    type: DELETE_STUDENT_SUCCESS,
    payload: id,
  };
};

export const deleteStudentFailure = (error) => {
  return {
    type: DELETE_STUDENT_FAILURE,
    payload: error,
  };
};

export const getCurrentStudentRequest = () => {
  return {
    type: GET_CURRENT_STUDENT_REQUEST,
  };
};

export const getCurrentStudentSuccess = (id) => {
  return {
    type: GET_CURRENT_STUDENT_SUCCESS,
    payload: id,
  };
};

export const getCurrentStudentFailure = (error) => {
  return {
    type: GET_CURRENT_STUDENT_FAILURE,
    payload: error,
  };
};

export const updateStudentRequest = () => {
  return {
    type: UPDATE_STUDENT_REQUEST,
  };
};

export const updateStudentSuccess = (student) => {
  return {
    type: UPDATE_STUDENT_SUCCESS,
    payload: student,
  };
};

export const updateStudentFailure = (error) => {
  return {
    type: UPDATE_STUDENT_FAILURE,
    payload: error,
  };
};
