import { addToCart, removeToCart } from "../reducer/cart";
import { decrement, increment } from "../reducer/counter";
import { loginFailure, loginSuccess, logoutSuccess } from "../reducer/login";

export const incrementTotal = () => ({
  type: increment,
});
export const decrementTotal = () => ({
  type: decrement,
});
export const addToCartItem = (item) => ({
  type: addToCart,
  payload: item,
});
export const removeToCartItem = (item) => ({
  type: removeToCart,
  payload: item,
});
export const userAuthenticationSucess = (user) => ({
  payload: user,
  type: loginSuccess,
});
export const userAuthenticationFailure = (error) => ({
  payload: error,
  type: loginFailure,
});
export const logout = () => ({
  type: logoutSuccess,
});
