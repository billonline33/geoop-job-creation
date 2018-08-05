import { userService } from "../services/userService";

const LOGIN_SUCCESS = "userReducer/LOGIN_SUCCESS";
const LOGIN_FAILURE = "userReducer/LOGIN_FAILURE";
const LOGOFF_USER = "userReducer/LOGOFF_USER";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user !== null ? { isLoggedIn: true, user } : {};

export function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      };

    case LOGIN_FAILURE:
      return {};

    case LOGOFF_USER:
      return {};

    default:
      return state;
  }
}

export const loginUser = (username, password) => {
  return dispatch => {
    //make web service call here
    userService
      .login(username, password)
      .then(() => {
        //login successful
        dispatch({
          type: LOGIN_SUCCESS,
          user: username
        });
      })
      .catch(error => {
        //error handling here
        dispatch({
          type: LOGIN_FAILURE,
          user: username
        });
        //Todo: show alert message here
      });
  };
};

export const logoffUser = () => {
  return dispatch => {
    dispatch({
      type: LOGOFF_USER
    });
  };
};
