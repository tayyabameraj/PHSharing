import axios from "axios";
import {
  X_CSRF_TOKEN_FAIL,
  X_CSRF_TOKEN_REQUEST,
  X_CSRF_TOKEN_SUCCESS,
} from "../constants/tokenConstants";

export const getCsrfToken = () => async (dispatch) => {
  try {
    dispatch({ type: X_CSRF_TOKEN_REQUEST });
    const res = await axios.get(
      "https://localhost/photo_sharing_website/public/token"
    );
    dispatch({ type: X_CSRF_TOKEN_SUCCESS, payload: res.data.data });
    console.log(res);
  } catch (err) {
    dispatch({ type: X_CSRF_TOKEN_FAIL, payload: err });
  }
};
