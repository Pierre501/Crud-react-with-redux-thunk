import { combineReducers } from "redux";
import studentReducer from "./studentsReducer";

const rootReducer = combineReducers({
  students: studentReducer,
});

export default rootReducer;
