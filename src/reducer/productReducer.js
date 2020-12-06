import {
  FETCH_PROD_TYPES,
  FETCH_SPECIFIC_TYPE,
  FILTER_BY_SEARCH,
} from "../types";

export const productReducer = (state = { search: "" }, action) => {
  switch (action.type) {
    case FETCH_PROD_TYPES:
      return { name: action.payload };

    case FETCH_SPECIFIC_TYPE:
      return { ...state, products: action.payload };

    case FILTER_BY_SEARCH:
        console.log(action.payload)
      return { ...state, search: action.payload };

    default:
      return state;
  }
};
