import axios from "axios";

import { GET_ERRORS } from "./types";

// Register user
export const registerChannel = channeldata => dispatch => {
  axios
    .post("/admin/add-channel", channeldata)
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
