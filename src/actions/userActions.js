import { userConstants } from "../constants/userConstants";
import { userService } from "../services/userService";

export const userActions = {
  loginUser,
  logoffUser
};

function loginUser(username, password) {
  return dispatch => {
    //make web service call here
    userService
      .login(username, password)
      .then(() => {
        //login successful
        dispatch({
          type: userConstants.LOGIN_SUCCESS,
          user: username
        });
      })
      .catch(error => {
        //error handling here
        dispatch({
          type: userConstants.LOGIN_FAILURE,
          user: username
        });
        //Todo: show alert message here
      });
  };
}

function logoffUser() {
  return dispatch => {
    dispatch({
      type: userConstants.LOGOFF_USER
    });
  };
}
