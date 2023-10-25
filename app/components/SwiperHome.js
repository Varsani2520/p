"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { HomeService } from "../service/HomeService";
// import Image from "next/image";
const SwiperHome = () => {
  const [swiper, setSwiper] = useState([]);
  const [title, setTitle] = useState([]);

  async function homeSwiper() {
    const result = await HomeService();
    setSwiper(result.swiper);
  }
  async function Title() {
    const result = await HomeService();
    setTitle(result.title);
  }
  useEffect(() => {
    homeSwiper();
    Title();
  }, []);
  return (
    <div>
      <Swiper
        className="w-full mt-20 justify-center h-[700px]"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {swiper.map((response) => {
          console.log(response.id);
          return (
            <SwiperSlide key={response.id}>
              <img
                src={response.src}
                alt="hlo"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {title.map((response) => {
        return (
          <div key={response.id}>
            <h1 class=" text-2xl font-bold text-gray-900  mt-20 mb-10 text-center justify-center ">
              <span class="text-gray-600  mt-5 ">{response.title}</span>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default SwiperHome;
