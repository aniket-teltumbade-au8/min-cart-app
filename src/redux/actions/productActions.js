import { SET_PRODUCTS } from "../actionTypes";
import Axios from "axios";
export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await Axios(
      `https://backendapi.turing.com/products?page=1&limit=20&description_length=20`
    );

    dispatch({
      type: SET_PRODUCTS,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};
