import React from "react";
import { useRef } from "react";
import "animate.css";
import "../../css/index.css";
import { Image1, Image2, Image3, search, Group } from "../../images";
import { PiHeart } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import { IoHomeSharp } from "react-icons/io5";
import { TbCube } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  const openRef = useRef<any>("");
  const flexRef = useRef<any>("hidden");

  const Skrill = () => {
    openRef.current.className === "open hamburger focus:outline-none"
      ? (openRef.current.className = "hamburger focus:outline-none")
      : (openRef.current.className = "open hamburger focus:outline-none");

    flexRef.current.className === "hidden md:hidden"
      ? (flexRef.current.className = "md:hidden")
      : (flexRef.current.className = "hidden md:hidden");

    console.log(openRef.current.className);
    console.log(flexRef.current.className);
    console.log(Skrill);
    // console.log();
  };
  return (
    <nav className="bg-[#F4F4F4] md:w-screen overflow-x-hidden ">
      <div className="bg-[#36424F] md:w-full md:h-[70px] text-center  text-white text-3xl font-bold">
        <div className="animate-bounce  animate__slideInRight py-5">
          Animate Advert
        </div>
      </div>
      <div className="bg-[#F4F4F4] h-[60px] flex md:w-full md:h-[100px] md:flex gap-5 justify-center">
        <div className="items-center flex gap-3">
          <img className="w-5" src={Image1} alt="" />
          <div>Sell on Connect MI</div>
        </div>
        <div className="hidden  md:flex items-center  gap-3">
          <img className="w-5" src={Image2} alt="" />
          <div>Track Your Orders</div>
        </div>
        <div className="hidden items-center md:flex gap-3">
          <CiDiscount1 />
          All Offers
        </div>
        <div className="items-center flex gap-3">
          <PiHeart />
          Wishlist
        </div>
      </div>
      <div className="bg-white w-full gap-y-5 h-[200px]  border rounded-xl md:mx-10 justify-center items-center   md:w-[1250px] md:h-[100px] md:flex gap-5">
        <div ref={flexRef} className="hidden md:hidden">
          <div className="absolute z-20 flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-[#222F3E] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-white">
            <div className="gap-y-5">
              <div className="flex items-center gap-3">
                <IoHomeSharp />
                <a className="text-2xl" onClick={Skrill} href="#home">
                  Home
                </a>
              </div>
              <div className="flex items-center gap-3">
                <TbCube />
                <a className="text-2xl" onClick={Skrill} href="#product">
                  Product
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaHandHoldingUsd />
                <a className="text-2xl" onClick={Skrill} href="#services">
                  Services
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PiHeart />
                <a className="text-2xl" onClick={Skrill} href="#wish">
                  WishList
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LuClipboardList />
                <a className="text-2xl" onClick={Skrill} href="#my">
                  My items
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BiSupport />
              <a className="text-xl" onClick={Skrill} href="#support">
                Support
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 h-1/2 justify-between ">
          <div className="flex lg:hidden">
            {" "}
            <button
              onClick={Skrill}
              id="menu-btn"
              ref={openRef}
              className="hamburger focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <img className="md:w-5 w-5 " src={Image1} alt="" />
            <div>Connect MI</div>
          </div>
          <div className=" pt-5 w-20 relative">
            {" "}
            <div className="border top-2 ml-7  py-0 px-1 rounded-full  absolute bg-red-800 text-white">
              0
            </div>
            <div className="text-4xl  ">
              <FiShoppingCart />
            </div>
          </div>
        </div>
        {/* mind u */}
        <div>
          <div className="w-[28rem] mx-10    border-2 border-black md:w-[28rem] md:h-[70px] flex gap-7 rounded-2xl">
            <img
              className="md:w-12 w-12 h-12 md:h-12 md:pl-2 md:pt-2 "
              src={search}
              alt=""
            />
            <input
              className="py-3 outline-none "
              type="text"
              placeholder="search a product or service"
            />
            <button className="bg-[#222F3E] text-white my-2  px-4 rounded-xl">
              Search
            </button>
          </div>
        </div>
        <div>
          <div className="hidden md:flex gap-3">
            <img className="w-7" src={Group} alt="" />
            <button>Sign up/Sign in </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
