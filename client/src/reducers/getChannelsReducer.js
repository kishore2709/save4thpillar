import { GET_CHANNELS } from "../actions/types";

const initialState = {
    channels: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELS:
            return {
                ...state,
                channels: action.payload
            };
        default:
            return state;
    }
}
