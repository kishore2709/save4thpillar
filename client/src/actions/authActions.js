import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

import { GET_ERRORS } from "./types";

// Register user
export const registerUser = (userdata, history) => dispatch => {
  axios
    .post("/users/register", userdata)
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Login - User get's Token
export const loginUser = userData => dispatch => {
  axios
    .post("/users/login", userData)
    .then(res => {
      // Get Token from response
      const { token } = res.data;

      // Set the Token to LocalStorage
      localStorage.setItem("jwtToken", token);

      // Set tocken to Authorization Header
      setAuthToken(token);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
