import {
  GET_RATING,
  RATING_LOADING,
  CLEAR_CURRENT_RATING
} from "../actions/types";

const initialState = {
  rating: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RATING_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_RATING:
      return {
        ...state,
        rating: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_RATING:
      return {
        ...state,
        rating: 0
      };

    default:
      return state;
  }
}
