import { SET_PRODUCTS, SET_CATEGORIES } from "../actionTypes";

const intialState = {
  products: null,
  categories: null
};
export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
