import {
  CLEAR_REGISTER,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/userConstants";

export const loginReducer = (
  state = { loggedIn: false, loginDetails: "" },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loginLoading: true, loggedIn: false, loginDetails: "" };
    case LOGIN_SUCCESS:
      return {
        loginLoading: false,
        loggedIn: true,
        loginDetails: action.payload,
      };
    case LOGIN_FAIL:
      return { loginLoading: false, loggedIn: false, err: action.payload };
    case LOGOUT:
      return { loginLoading: false, loggedIn: false, loginDetails: "" };
    default:
      return state;
  }
};
export const registerReducer = (
  state = { registered: false, registerMessage: "" },
  action
) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { registerLoading: true, registered: false };
    case REGISTER_SUCCESS:
      return {
        registerLoading: false,
        registered: true,
        registerMessage: action.payload,
      };
    case REGISTER_FAIL:
      return { registerLoading: false, err: action.payload, registered: false };
    case CLEAR_REGISTER:
      return { registerLoading: false, registerMessage: "", registered: false };
    default:
      return state;
  }
};
