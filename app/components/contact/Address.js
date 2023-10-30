"use client";
import { ContactAddressService } from "@/app/service/contact/ContactAddress";
// import Image from "next/image";
import React, { useEffect, useState } from "react";

const Address = () => {
  const [title, setTitle] = useState([]);
  const [address, setAddress] = useState([]);
  // function for title
  async function Title() {
    const result = await ContactAddressService();
    setTitle(result.title);
    console.log(result.title);
  }
  // function for address
  async function Address() {
    const result = await ContactAddressService();
    setAddress(result.address);
    console.log(result.address);
  }
  useEffect(() => {
    Title();
    Address();
  },[]);
  return (
    <>
      <div className=" top-0 ml-[450px] mt-16 justify-center items-center pb-[160px] bg-[#ececec] text-gray-600">
        <div className="max-w-screen-md  items-center justify-between ">
          {title.map((response) => {
            return (
              <div key={response.id}>
                <div className="font-serif text-5xl py-10 pl-20">{response.title}</div><hr/>
              </div>
            );
          })}
          {address.map((response) => {
            return (
              <div className="flex pt-5" key={response.id}>
                <div className="pl-10">
                  <img src={response.icon} height={50} width={50} alt="hlo"/>
                </div>
                <div className="text-2xl">{response.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Address;
