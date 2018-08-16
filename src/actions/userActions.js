import { userConstants } from '../constants/userConstants';
import { userService } from '../services/userService';

export const userActions = {
  loginUser,
  logoffUser
};

//Todo: use refresh token to get a new access token before it expires

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
  userService.logoff();
  return dispatch => {
    dispatch({
      type: userConstants.LOGOFF_USER
    });
  };
}
