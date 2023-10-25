import { addToCart, removeToCart } from "../reducer/cart";
import { decrement, increment } from "../reducer/counter";

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
