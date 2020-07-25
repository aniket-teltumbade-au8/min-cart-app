import {
  REGISTER_USER,
  LOGIN
} from "../actionTypes";

const intialState = {
  login: null,
  register: null
};
export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return { ...state, register: payload };
    case LOGIN:
      return { ...state, login: payload };
    default:
      return state;
  }
};
