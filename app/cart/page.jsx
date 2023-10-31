"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCartItem, updateCartCount } from "../action/action";

const page = () => {
  
  const carts = useSelector((state) => state.cart.cartItems);
  const cartCount = useSelector((state) => state.cart.cartCount); // Get the cart count from the Redux store
  const dispatch = useDispatch();

  // Function to update the cart count in Redux
  function updateCartCountAction(count) {
    dispatch(updateCartCount(count));
  }

  function rmv(item) {
    // Dispatch the action to remove the item
    dispatch(removeToCartItem(item));

    // Calculate the updated cart count
    const updatedCartCount = cartCount - 1; // Decrement by 1 for the removed item
    updateCartCountAction(updatedCartCount); // Dispatch the action to update the cart count
  }
  
  return (
    <div className="mt-20 justify-center ">
       {carts.length === 0 ? (
        <img src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png" alt="empty cart img"/>
      ) : (
      carts.map((cart) => (
        
          <div className="mt-10" key={cart.id}>
            <h1>{cart.title}</h1>
            <img src={cart.image} alt={cart.title}/>
            {/* rmv=remove */}
            <button onClick={() => rmv(cart)}>remove</button>
          </div>
        )
      ))}
    </div>
  );
};

export default page;
