import { combineReducers } from "redux";
import student from "./studentReducers";

const rootReducer = combineReducers({
  student,
});

export default rootReducer;
