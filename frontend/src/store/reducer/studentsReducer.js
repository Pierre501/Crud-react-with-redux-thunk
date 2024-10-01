const initialState = {
  students: [],
  loading: false,
  error: null,
  currentStudent: null,
};
export const FETCH_STUDENT_REQUEST = "FETCH_STUDENT_REQUEST";
export const FETCH_STUDENT_SUCCESS = "FETCH_STUDENT_SUCCESS";
export const FETCH_STUDENT_FAILURE = "FETCH_STUDENT_FAILURE ";
export const CREATE_STUDENT_REQUEST = "CREATE_STUDENT_REQUEST";
export const CREATE_STUDENT_SUCCESS = "CREATE_STUDENT_SUCCESS";
export const CREATE_STUDENT_FAILURE = "CREATE_STUDENT_FAILURE";
export const DELETE_STUDENT_REQUEST = "DELETE_STUDENT_REQUEST";
export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
export const DELETE_STUDENT_FAILURE = "DELETE_STUDENT_FAILURE";
export const GET_CURRENT_STUDENT_REQUEST = "GET_CURRENT_STUDENT_REQUEST";
export const GET_CURRENT_STUDENT_SUCCESS = "GET_CURRENT_STUDENT_SUCCESS";
export const GET_CURRENT_STUDENT_FAILURE = "GET_CURRENT_STUDENT_FAILURE";
export const UPDATE_STUDENT_REQUEST = "UPDATE_STUDENT_REQUEST";
export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const UPDATE_STUDENT_FAILURE = "UPDATE_STUDENT_FAILURE";

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT_REQUEST:
      return { ...state, loading: true };
    case FETCH_STUDENT_SUCCESS:
      return {
        ...state,
        students: action.payload,
        loading: false,
        currentStudent: null,
      };
    case FETCH_STUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_CURRENT_STUDENT_REQUEST:
      return { ...state, loading: true };
    case GET_CURRENT_STUDENT_SUCCESS:
      return { ...state, loading: false, currentStudent: action.payload };
    case GET_CURRENT_STUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case CREATE_STUDENT_REQUEST:
      return { ...state, loading: true };
    case CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.payload],
        loading: false,
      };
    case CREATE_STUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_STUDENT_REQUEST:
      return { ...state, loading: true };
    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
        loading: false,
        currentStudent: null,
      };
    case UPDATE_STUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_STUDENT_REQUEST:
      return { ...state, loading: true };
    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
        loading: false,
        currentStudent: null,
      };
    case DELETE_STUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default studentReducer;
