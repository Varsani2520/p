import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { LoginReducer } from "./login";

export const rootReducer = combineReducers({
  cart: cartReducer,
  user:LoginReducer,
});
