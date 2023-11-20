import React from "react";
import { Image1 } from "../../images";

const Joinus = () => {
  return (
    <section className="w-full">
      <div className="w-screen h-[250px] bg-[#36424F] md:h-[150px] justify-between md:flex">
        <div className="h-1/2 md:py-10  md:w-[1000px] md:flex  space-y-4 md:-space-x-20  text-white px-10 md:px-0 py-3">
          <div className="flex md:pt-7  items-center gap-3 px-32">
            <img className="w-10" src={Image1} alt="" />
            <div className="whitespace-nowrap text-xl  font-semibold">
              Connect MI
            </div>
          </div>
          <div className="text-left  whitespace-normal">
            Subscribe to our newsletter and be the first to know about our
            hottest offers.
          </div>
        </div>
        <div className="h-1/2 md:w-1/4   ">
          <div className="px-32 md:px-0 py-6 md:py-10">
            <div className="border w-[300px]  flex rounded-xl bg-white ">
              <input
                className="py-3 outline-none"
                type="text"
                placeholder="Type your email address"
              />
              <button className="whitespace-nowrap bg-[#222F3E] rounded-xl text-white px-1">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Joinus;
