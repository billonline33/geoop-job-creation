import { combineReducers } from "redux";
import { jobReducer } from "./jobReducer";
import { authenticationReducer } from "./authenticationReducer";

export default combineReducers({
  jobReducer,
  authenticationReducer
});
