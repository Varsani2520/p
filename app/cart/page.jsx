"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCartItem } from "../action/action";

const page = () => {
  
  const carts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  function rmv(item) {
    
  }
  return (
    <div className="mt-20">
       {carts.length === 0 ? (
        <img src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png" alt="empty cart img"/>
      ) : (
      carts.map((cart) => (
        
          <div className="mt-10" key={cart.id}>
            <h1>{cart.title}</h1>
            <img src={cart.image} alt={cart.title}/>
            {/* rmv=remove */}
            <button onClick={() => dispatch(removeToCartItem(cart))}>remove</button>
          </div>
        )
      ))}
    </div>
  );
};

export default page;
