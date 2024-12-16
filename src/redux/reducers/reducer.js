import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const datareducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default datareducer;
