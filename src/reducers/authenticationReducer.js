import { userConstants } from "../constants/userConstants";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user !== null ? { isLoggedIn: true, user } : {};

export function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      };

    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.LOGOFF_USER:
      return {};

    default:
      return state;
  }
}
