import { combineReducers } from "redux";
import { jobListReducer } from "./jobListReduce";
import { authenticationReducer } from "./authenticationReducer";

export default combineReducers({
  jobListReducer,
  authenticationReducer
});
