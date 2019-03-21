import { GET_ERRORS } from "./types";
import axios from "axios";
export const registerUser = userdata => dispatch => {
  axios
    .post("/users/register", userdata)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
