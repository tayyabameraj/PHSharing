import {
  X_CSRF_TOKEN_FAIL,
  X_CSRF_TOKEN_REQUEST,
  X_CSRF_TOKEN_SUCCESS,
} from "../constants/tokenConstants";

export const tokenReducer = (state = { csrfToken: "" }, action) => {
  switch (action.type) {
    case X_CSRF_TOKEN_REQUEST:
      return { loading: true, csrfToken: "" };
    case X_CSRF_TOKEN_SUCCESS:
      return { loading: false, csrfToken: action.payload };
    case X_CSRF_TOKEN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
