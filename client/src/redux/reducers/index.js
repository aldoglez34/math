import { combineReducers } from "redux";
import student from "./studentReducers";
import breadcrumb from "./breadcrumbReducers";
import course from "./courseReducers";
import exam from "./examReducers";
import unlocked from "./unlockedReducers";

const rootReducer = combineReducers({
  student,
  breadcrumb,
  course,
  exam,
  unlocked,
});

export default rootReducer;
