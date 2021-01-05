import filterReducer from "./filtersReducer";
import galleryReducer from "./galleryReducer";

import {combineReducers} from "redux";

export default combineReducers({
    filterReducer,
    galleryReducer
})