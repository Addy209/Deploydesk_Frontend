import { combineReducers } from "@reduxjs/toolkit";
import datareducer from "./reducer";
import useReducer from "./userReducer";

const rootReducer = combineReducers({
  data: datareducer,
  user: useReducer,
});

export default rootReducer;
