import axios from "axios";

import { GET_RATING, RATING_LOADING, CLEAR_CURRENT_RATING } from "./types";

// GET CURRENT RATING

export const getCurrentRating = () => dispatch => {
  dispatch(setCurrentRating());
  axios
    .get("/")
    .then(res => {
      dispatch({
        type: GET_RATING,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_RATING,
        payload: null
      })
    );
};

// rating loading
export const setCurrentRating = () => {
  return {
    type: RATING_LOADING
  };
};

// rating clear on logout
export const clearCurrentRating = () => {
  return {
    type: CLEAR_CURRENT_RATING
  };
};
