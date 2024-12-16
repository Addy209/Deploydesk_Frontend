import axios from "axios";
import {
  FETCH_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  SAVE_USER,
  SAVE_ERROR_USER,
} from "../types";
import { getFullURL } from "../../utils/URLs";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA });
  try {
    const response = await axios.get(
      new URL("https://jsonplaceholder.typicode.com/users").href
    );

    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error });
  }
};

export const LoginUser = (username, password) => async (dispatch) => {
  try {
    const user = await axios.post(getFullURL("login"), {
      email: username,
      password: password,
    });
    dispatch({ type: SAVE_USER, payload: user.data });
  } catch (error) {
    dispatch({ type: SAVE_ERROR_USER, error });
  }
};
