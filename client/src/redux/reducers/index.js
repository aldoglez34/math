import { combineReducers } from "redux";
import admin from "./adminReducer";
import course from "./courseReducers";
import exam from "./examReducers";
import purchase from "./purchaseReducer";
import student from "./studentReducers";
import unlocked from "./unlockedReducers";
import zenMode from "./zenModeReducers";

const rootReducer = combineReducers({
  admin,
  course,
  exam,
  purchase,
  student,
  unlocked,
  zenMode,
});

export default rootReducer;
