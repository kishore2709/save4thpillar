import axios from "axios";

import { GET_CHANNELS } from "./types";

// GET CHANNELS
export const getChannels = () => dispatch => {
    axios
        .get("/channels/get-channels")
        .then(res => {
            dispatch({
                type: GET_CHANNELS,
                payload: res.data
            });

            console.log(res);
        })
        .catch(err =>
            dispatch({
                type: GET_CHANNELS,
                payload: null
            })
        );
};
