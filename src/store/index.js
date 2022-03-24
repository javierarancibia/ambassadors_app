import { createStore, combineReducers } from "react-redux";

import ImageReducer from "./ImageReducer";

const RootReducer = combineReducers({
  images: ImageReducer,
});

export default createStore(RootReducer);
