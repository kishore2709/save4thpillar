import axios from "axios";

import { GET_RATING, RATING_LOADING, CLEAR_CURRENT_RATING } from "./types";

// GET CURRENT RATING
export const getCurrentRating = ratingData => dispatch => {
  dispatch(setCurrentRating());
  axios
    .post("/users/", ratingData)
    .then(res => {
      dispatch({
        type: GET_RATING,
        payload: res.data
      });
      localStorage.setItem("rating", ratingData.rating);
      console.log(res);
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
