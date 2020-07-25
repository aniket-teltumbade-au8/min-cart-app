import {
  SET_PRODUCTS,
  SET_CATEGORIES,
  FILTER_PRODUCTS_BY_CATEGORY
} from "../actionTypes";

const intialState = {
  products: null,
  categories: null,
  prodCatFilter: null
};
export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_CATEGORIES:
      return { ...state, categories: payload };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return { ...state, prodCatFilter: payload };
    default:
      return state;
  }
};
