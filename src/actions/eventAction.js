import axios from "axios";
import {
  EVENT_LIST_FAIL,
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
} from "../constants/eventConstants";

export const listEvents = () => async (dispatch) => {
  try {
    dispatch({ type: EVENT_LIST_REQUEST });
    const { data } = await axios.get("https://psw.wpcoders.co.uk/events");
    dispatch({ type: EVENT_LIST_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
