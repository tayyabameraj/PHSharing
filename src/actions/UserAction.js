import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/userConstants";

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(
      "https://psw.wpcoders.co.uk/users/login",
      {
        email: email,
        password: password,
      }
    );
    console.log(data, "from action");
    if (data.message === "User Has Been Fined") {
      dispatch({ type: LOGIN_SUCCESS, payload: data.data[0] });
      localStorage.setItem("user", data.data[0].id);
    } else {
      throw "error";
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("user");
};

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.get(
      `https://psw.wpcoders.co.uk/users/show/${id}`
    );
    console.log(data);
    if (data.message === "User Has Been Fetch") {
      dispatch({ type: LOGIN_SUCCESS, payload: data.data });
      localStorage.setItem("user", data.data.id);
    } else {
      dispatch({ type: LOGIN_FAIL });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const registerUser = (
  name,
  email,
  password,
  dob,
  phone,
  description
) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post(
      "https://psw.wpcoders.co.uk/users/create",
      {
        name: name,
        email: email,
        password: password,
        role: 0,
        dob: dob,
        phone_no: phone,
        status: 0,
        description: description ? description : "",
      }
    );
    console.log(data);
    dispatch({ type: REGISTER_SUCCESS, payload: data.message });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
