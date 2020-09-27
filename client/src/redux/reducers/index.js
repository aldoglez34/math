import { combineReducers } from "redux";
import student from "./studentReducers";
import breadcrumb from "./breadcrumbReducers";
import course from "./courseReducers";
import exam from "./examReducers";
import unlocked from "./unlockedReducers";
import zenMode from "./zenModeReducers";
import admin from "./adminReducers";

const rootReducer = combineReducers({
  student,
  breadcrumb,
  course,
  exam,
  unlocked,
  zenMode,
  admin,
});

export default rootReducer;
