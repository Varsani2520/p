"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCartItem } from "../action/action";

const page = () => {
  // who cpy here ??
  const carts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  function rmv(item) {
    
  }
  return (
    <div className="mt-7">
      {/* ehat about map */}
      {carts.map((cart) => {
        return (
          <div className="mt-10">
            <h1>{cart.title}</h1>
            <img src={cart.image} />
            {/* rmv=remove */}
            <button onClick={() => dispatch(removeToCartItem(cart))}>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default page;
