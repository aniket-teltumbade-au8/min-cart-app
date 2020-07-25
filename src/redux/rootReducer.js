import { productReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  productState: productReducer,
  userState: userReducer
});
export default rootReducer
