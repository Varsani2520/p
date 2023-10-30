"use client";
import React from "react";

const Map = () => {
  return (
    <>
      <div className=" top-0 left-0 mt-20 justify-center items-center flex bg-white ">
        <div className="max-w-screen-xl  items-center justify-between  p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7563.676492972929!2d69.5558213285708!3d23.197359187239623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395119262c6f69f3%3A0x441b32b6c4516fad!2sBharasar%2C%20Gujarat%20370030!5e0!3m2!1sen!2sin!4v1696082571629!5m2!1sen!2sin"
            width="1250"
            height="450"
            className="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
