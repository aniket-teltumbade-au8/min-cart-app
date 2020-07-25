import { productReducer } from "./reducers/productReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  productState: productReducer
});
export default rootReducer
