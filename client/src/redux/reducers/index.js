import { combineReducers } from "redux";
import student from "./studentReducers";
import breadcrumb from "./breadcrumbReducers";
import course from "./courseReducers";
import exam from "./examReducers";

const rootReducer = combineReducers({
  student,
  breadcrumb,
  course,
  exam,
});

export default rootReducer;
