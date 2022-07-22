import axios from "axios";
// export const getUserPosts = (id) => async (dispatch) =>{

// }
export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://psw.wpcoders.co.uk/posts");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
