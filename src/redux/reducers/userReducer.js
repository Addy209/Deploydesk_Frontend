import { data } from "react-router";
import { SAVE_USER, SAVE_ERROR_USER, CLEAR_LOGIN_ERROR } from "../types";

const userState = {
  user: "",
  error: "",
};

const useReducer = (state = userState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload };
    case SAVE_ERROR_USER:
      return { ...state, error: action.error };
    case CLEAR_LOGIN_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};

export default useReducer;
