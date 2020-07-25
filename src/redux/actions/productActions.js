import {
  SET_PRODUCTS,
  SET_CATEGORIES,
  FILTER_PRODUCTS_BY_CATEGORY
} from "../actionTypes";
import Axios from "axios";
export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await Axios(
      `https://backendapi.turing.com/products?page=1&limit=101&description_length=20`
    );

    dispatch({
      type: SET_PRODUCTS,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};
export const fetchCategories = () => async (dispatch, getState) => {
  try {
    const response = await Axios(`https://backendapi.turing.com/categories`);

    dispatch({
      type: SET_CATEGORIES,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};

export const filterProductsByCategory = catId => async (dispatch, getState) => {
  try {
    const response = await Axios(
      `https://backendapi.turing.com/products/inCategory/${catId}`
    );

    dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};
