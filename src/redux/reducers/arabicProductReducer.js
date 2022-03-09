import { FETCH_ARABIC_PRODUCTS_SUCCESS } from "../actions/productActions";

const initState = [];

const arabicProductReducer = (state = initState, action) => {
  if (action.type === FETCH_ARABIC_PRODUCTS_SUCCESS) {
    state = action.payload.slice(0);
    return state;
  }

  return state;
};

export default arabicProductReducer;