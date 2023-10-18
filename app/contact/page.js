import React from "react";
import Map from "../components/contact/Map";
import Address from "../components/contact/Address";
import Form from "../components/contact/Form";

const page = () => {
  return <div className=" bg-white text-black">
    <Map/>
    <div className="grid grid-cols-2 ">
      <div><Address/></div>
      <div><Form/></div>
    </div>
  </div>;
};

export default page;
