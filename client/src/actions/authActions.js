import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

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

// .post("/users/login", userdata)
// Login - User get's Token
export const loginUser = userData => dispatch => {
  axios
    .post("/users/login", userData)
    .then(res => {
      // Get Token from response
      console.log(res);
      const { token, rating } = res.data;

      // Set the Token to LocalStorage
      localStorage.setItem("jwtToken", token);

      // Set the Token to LocalStorage
      localStorage.setItem("rating", rating);

      // Set tocken to Authorization Header
      setAuthToken(token);

      // Decode user from Token
      const decoded = jwt_decode(token);

      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Set Logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = userData => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("rating");

  // Remove auth header for future requests
  setAuthToken(false);

  //Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// .post("/admin/", admindata)
// Login - Admin get's Token
export const loginAdmin = adminData => dispatch => {
  axios
    .post("/admin/login", adminData)
    .then(res => {
      // Get Token from response
      console.log(res);
      const { token, rating } = res.data;

      // Set the Token to LocalStorage
      localStorage.setItem("jwtToken", token);

      // Set the Token to LocalStorage
      localStorage.setItem("rating", rating);

      // Set tocken to Authorization Header
      setAuthToken(token);

      // Decode user from Token
      const decoded = jwt_decode(token);

      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
