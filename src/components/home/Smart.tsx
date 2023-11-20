import React from "react";
import { Homesmart } from "../../logic/index";
import { useState } from "react";
import { left, right } from "../../images";
import "animate.css";

const Smart = () => {
  let [index, setindex] = useState<number>(0);
  let [height, setheight] = useState<number>(25);
  let [width, setwidth] = useState<number>(25);
  let [animate, setAnimate] = useState<string>("");
  console.log(index);
  return (
    <section className="w-full bg-[#F4F4F4] flex  md:flex items-center overflow-x-hidden">
      <button
        onClick={
          index > 0
            ? () => {
                setAnimate("animate__slideInRight");
                setindex(--index);
              }
            : undefined
        }
        className="-mr-20 z-10  border-8 border-white rounded-full h-20 px-5 bg-[#FBE4CF]"
      >
        <img className="w-8" src={left} alt="" />
      </button>
      <div className="w-full md:w-[1200px]  border md:flex md:mx-14 rounded-xl  md:h-[450px] bg-[#212844]">
        {Homesmart.map((t, i) => {
          if (i === index) {
            return (
              <div key={i} className={`w-full animate__animated ${animate}`}>
                <div className="flex flex-row md:w-full">
                  <div className="w-1/2 text-white text-6xl space-y-10 p-10 ">
                    <div className="text-2xl text-left">
                      Best Deal Online on smart watches
                    </div>
                    <div>{t.name}</div>
                    <div className="text-lg text-left">Up to 80% off </div>
                  </div>
                  <div className="w-1/2 pt-5">
                    <img
                      style={{ width: `${width}rem`, height: `${height}rem` }}
                      src={t.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          }
          return <div className="hidden"></div>;
        })}
      </div>
      <button
        onClick={
          index < Homesmart.length - 1
            ? () => {
                setAnimate("animate__slideInLeft");
                setindex(++index);
              }
            : undefined
        }
        className="-ml-20 z-10  border-8 border-white rounded-full h-20 px-5 bg-[#FBE4CF]"
      >
        <img src={right} alt="" />
      </button>
    </section>
  );
};

export default Smart;
