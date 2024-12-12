import axios from "axios";
import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../types";

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
