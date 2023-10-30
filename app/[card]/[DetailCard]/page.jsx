"use client";
import { addToCartItem, incrementTotal } from "@/app/action/action";
import { ProviderService } from "@/app/service/ProviderService";
import { addRequestMeta } from "next/dist/server/request-meta";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
const page = () => {
  const carts=useSelector((state)=>state.cart.cartItems)
  const [hlo, setHlo] = useState([]);
  const [cart, setCart] = useState(0);
  const { card } = useParams();
  const { DetailCard } = useParams();
  console.log(card);
  console.log("d", DetailCard);
  const dispatch=useDispatch()
  async function Providers() {
    try {
      const response = await ProviderService(card);
      setHlo(response.services);
    } catch (error) {
      console.log(error);
    }
  }
  function hello(item){
console.log(item);
dispatch(addToCartItem(item))
toast.success("add to cart success")
  }
  useEffect(() => {
    Providers();
  }, []);

  return (
    <div className="top-0 left-0 justify-center items-center flex bg-white">
      <ToastContainer/>
      <div className="max-w-screen-xl items-center justify-between  p-4">
        
        {hlo.map((response) => {
          if (DetailCard == response.id)
            return (
              <div key={response.id}>
                <div className="grid grid-cols-2 mt-20 mb-10   justify-center gap-10">
                  <div className="w-full max-w-screen-lg">
                    <img src={response.image} className="h-96" />
                    <button
                      type="button"
                      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                    onClick={()=>hello(response)}>
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5 "
                    >
                      Buy Now
                    </button>
                  </div>
                  <div className="">
                    <>
                      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow ">
                        <div className="px-5 pb-5">
                          <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                              {response.title}
                            </h5>
                          </a>
                          <div className="flex items-center mt-2.5 mb-5">
                            <svg
                              className="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                              {response.rating}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 ">
                              {response.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default page;
