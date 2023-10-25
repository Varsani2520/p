// initial stage for cart functionallity
const initialState = {
  cartItems: [],
  status: "pending",
};
export const addToCart = "add";
export const removeToCart = "remove";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToCart:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        status: "pending",
      };
    case removeToCart:
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCart,
        status: "pending",
      };
    default:
      return state;
  }
};
