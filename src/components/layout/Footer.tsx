import React from "react";
import {
  visa,
  pay,
  master,
  gpay,
  paypal,
  payonner,
  webmoney,
} from "../../images";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoYoutube } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";
import { FaDhl } from "react-icons/fa";
import { FaUps } from "react-icons/fa6";
import { LiaFedex } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="w-screen overflow-x-hidden">
      <div className="w-full h-[650px] md:h-[380px] bg-[#222F3E] text-white overflow-y-hidden">
        <div className="w-full h-1/2 gap-5 pt-5 md:h-1/2 grid grid-cols-2 md:px-10 md:grid-cols-4 md:pt-5 px-5">
          <div className="w-[250px] text-left px-5 space-y-4 ">
            <div className="font-bold text-xl">Customer support</div>
            <div>
              Help Center <br /> Delivery options <br /> Report an issue <br />{" "}
              Contact us
            </div>
          </div>
          <div className="w-[250px] text-left px-5 space-y-4 ">
            <div className="font-bold text-xl">About Connect Mi</div>
            <div>
              About Connectmi.com <br /> About Connectmi group <br /> Privacy
              note <br /> Products & services
            </div>
          </div>
          <div className="w-[250px] text-left px-5 space-y-4 ">
            <div className="font-bold text-xl">Sell On Connect Mi</div>
            <div>
              Help Center <br /> Delivery options <br /> Report an issue <br />{" "}
              Contact us
            </div>
          </div>
          <div className="w-[250px] text-left px-5 space-y-4 ">
            <div className="font-bold text-xl">Trade Service</div>
            <div>
              Help Center <br /> Delivery options <br /> Report an issue <br />{" "}
              Contact us
            </div>
          </div>
        </div>
        <div className="md:px-14 md:pt-0 pt-5 px-10">
          <hr />
        </div>
        <div className="md:h-1/2 h-1/2 w-full md:flex pt-3 ">
          <div className="md:w-1/2 flex pt-4  px-7 md:h-full md:px-10 md:py-4">
            <div className="md:w-1/2 text-white space-y-12 text-left space">
              <div className="space-y-3">
                <div className="font-bold text-xl">Follow Us </div>
                <div className="flex space-x-3 text-2xl">
                  <div>
                    <FaTwitter />
                  </div>
                  <div>
                    <FaLinkedinIn />
                  </div>
                  <div>
                    <BiLogoYoutube />
                  </div>
                  <div>
                    <BsFacebook />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <FaRegCopyright />
                </div>
                <div className="md:font-bold md:text-xl">
                  All Rights Reserved
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-4 text-left">
              <div className="font-bold text-xl">Delivery</div>
              <div className="flex space-x-4 text-4xl">
                <div className="text-7xl">
                  <FaDhl />
                </div>
                <div className="text-5xl">
                  <FaUps />
                </div>
                <div className="text-7xl">
                  <LiaFedex />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  md:h-full px-7 space-y-5 text-left">
            <div className="font-bold text-xl">Payments Method</div>
            <div className="flex space-x-2 md:space-x-4">
              <div>
                <img className="w-10" src={visa} alt="" />
              </div>
              <div>
                <img className="w-10" src={pay} alt="" />
              </div>
              <div>
                <img className="w-10" src={master} alt="" />
              </div>
              <div>
                <img className="w-10" src={gpay} alt="" />
              </div>
              <div>
                <img className="w-10" src={paypal} alt="" />
              </div>
              <div>
                <img className="w-10" src={payonner} alt="" />
              </div>
              <div>
                <img className="w-10" src={webmoney} alt="" />
              </div>
            </div>
            <div className="flex space-x-2 md:space-x-2 ">
              <div className="whitespace-nowrap">Privacy Policy</div>
              <div className="whitespace-nowrap">Terms of use</div>
              <div className="whitespace-nowrap">Sales and Refunds</div>
              <div className="whitespace-nowrap">Legal</div>
              <div className="whitespace-nowrap">Site Map</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
