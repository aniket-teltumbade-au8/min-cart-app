import { SET_PRODUCTS } from "../actionTypes";

const intialState = {
  products: null
};
export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
