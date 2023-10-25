"use client";
import React, { useEffect, useState } from "react";
import { HomeService } from "../service/HomeService";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { decrementTotal, incrementTotal } from "../action/action";
// import Image from "next/image";

const HomeCard = () => {
  const router = useRouter();
  const [card, setCard] = useState([]);
  async function Card() {
    const result = await HomeService();
    setCard(result.card);
  }
  useEffect(() => {
    Card();
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-2 mt-10 mb-10   justify-center ">
      
      {card.map((response) => {
        return (
          <div
            className=" max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow    mb-20 ml-16"
            key={response.id}
          >
            <img src={response.img} alt="hlo"/>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                {response.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {response.description}
            </p>
            <a
              onClick={() => router.push(`/${response.id}`)}
              className="inline-flex items-center text-blue-600 hover:underline cursor-pointer"
            >
              Read More
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCard;
