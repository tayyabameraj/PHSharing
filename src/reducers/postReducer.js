import {
  USER_POST_FAIL,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
} from "../constants/postConstants";

export const userPostsReducer = (state = { userPosts: [] }, action) => {
  switch (action.type) {
    case USER_POST_REQUEST:
      return { loading: true, userPosts: [] };
    case USER_POST_SUCCESS:
      return { loading: false, userPosts: action.payload };
    case USER_POST_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};
