import { combineReducers } from "../../../../../Users/bhuang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux";
import { jobReducer } from "./jobReducer";
import { authenticationReducer } from "./authenticationReducer";

export default combineReducers({
  jobReducer,
  authenticationReducer
});
