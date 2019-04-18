import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import ratingReducer from "./ratingReducer";
import getChannelsReducer from "./getChannelsReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    rating: ratingReducer,
    getData: getChannelsReducer
});
