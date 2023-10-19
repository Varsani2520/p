"use client";
import { useEffect, useState } from "react";
import { AboutService } from "../service/AboutService";

export default function About() {
  const [about, setAbout] = useState([]);

  async function About() {
    const result = await AboutService();

    setAbout(result);
    console.log(result);
  }
  useEffect(() => {
    About();
  }, []);
  return (
    <>
      <div className=" top-0 left-0 mt-16 justify-center items-center flex bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl  items-center justify-between  p-4">
          {about.map((response) => (
            <div key={response.id}>
              <div className=" w-full opacity-[0.5]">
                <img src={response.src} className="w-[1500px]" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-[-0px] relative ml-[10px] ">
                <div>
                  <img src={response.image} alt="hi"></img>
                </div>

                <div>
                  {response.name}
                  {response.skills}
                </div>
              </div>
              {/* description */}
              <div className="text-gray-600  font-serif text-2xl">
                <div>{response.desc1}</div>
                <br />
                <div>{response.desc2}</div>
                <br />
                <div>{response.desc3}</div>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
