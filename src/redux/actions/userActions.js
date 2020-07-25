import { REGISTER_USER } from "../actionTypes";
import Axios from "axios";

export const userRegister = (name, email, password) => async (
  dispatch,
  getState
) => {
  try {
    const response = await Axios({
      method: "post",
      url: "https://backendapi.turing.com/customers",
      data: {
        name: `${name}`,
        email: `${email}`,
        password: `${password}`
      },
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
    dispatch({
      type: REGISTER_USER,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};
