"use client";

import HomeCard from "./components/HomeCard";
import SwiperHome from "./components/SwiperHome";

export default  function Home() {
  
  return (
    <div className="top-0 left-0 justify-center items-center flex bg-white">
      <div className="max-w-screen-xl  items-center justify-between  p-4">
        <SwiperHome />
        <HomeCard/>
      </div>
    </div>
  );
}
