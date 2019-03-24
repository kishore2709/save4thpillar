import axios from "axios";

import { GET_RATING, RATING_LOADING, GET_ERRORS } from "./types";

// GET CURRENT RATING

export const getCurrentRating = () => dispatch => {
  dispatch(setCurrentRating());
};

// rating loading
export const setCurrentRating = () => {
  return {
    type: RATING_LOADING
  };
};
