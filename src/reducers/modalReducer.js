import {
  DISMISS_MODAL,
  OPEN_LOGIN_MODAL,
  OPEN_REGISTER_MODAL,
} from "../constants/modalConstants";

export const modalReducer = (state = { modal: "" }, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return { modal: "login" };
    case OPEN_REGISTER_MODAL:
      return { modal: "register" };
    case DISMISS_MODAL:
      return { modal: "none" };
    default:
      return state;
  }
};
