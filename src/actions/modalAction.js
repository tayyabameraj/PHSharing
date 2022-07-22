import {
  DISMISS_MODAL,
  OPEN_LOGIN_MODAL,
  OPEN_REGISTER_MODAL,
} from "../constants/modalConstants";

export const showModal = (modal) => async (dispatch) => {
  if (modal === "login") {
    dispatch({ type: OPEN_LOGIN_MODAL });
  } else if (modal === "register") {
    dispatch({ type: OPEN_REGISTER_MODAL });
  } else if (modal === "dismiss") {
    dispatch({ type: DISMISS_MODAL });
  }
};
