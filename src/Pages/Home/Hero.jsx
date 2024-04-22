import React from "react";
import demos from "../../img/demos-icon.svg";
import logo from "../../img/HV_horizatonal_website_logo.png";
import { Link } from "react-router-dom";
import gif1 from "../../img/new/gif.gif";
import CategoryCreator from "../../img/new/MOCKEDupgoldwhite2.png";
import greenLight from "../../img/HV_LIGHTNINGbolt_OVALblur_green_noFloor_short_300x1080_stringed.mp4";
import greenLogo from "../../img/green-logo.png";
import googleLogo from "../../img/google-logo.png";

const Hero = () => {
  return (
    <>
      <div className="banner-top  bg-transparent mb-4  md:mb-10">
        <div className="custom-container relative">
          <div className="logo  mb-24 sm:mb-0">
            <a href="" className="flex flex-col justify-center items-center">
              <img src={logo} alt="" className="mb-5" />
              <div className="flex gap-5  flex-wrap justify-center items-center">
                <img src={googleLogo} alt="" className="object-contain" />
                <img src={CategoryCreator} alt="" className="object-contain" />
                <img src={greenLogo} alt="" className="object-contain" />
              </div>
            </a>
          </div>
          <div className="bnr-sec -mt-[120px] relative w-full">
            <video
              autoPlay
              muted
              loop
              className="absolute md:-inset-72  -inset-40 w-full h-full top-0 -z-10 "
            >
              <source src={greenLight} type="video/mp4" />
            </video>
            <div className="caption-area text-center ">
              <div className="demos-btn">
                <span className="ico">
                  <img src={demos} alt="demos" />
                </span>
                <span className="txt font-poppins">
                  Data. Dissent. Disrupiton. Destroying the POC Maelstrom.
                </span>
              </div>
              <div className="title-tp text-center text-lg mx-auto relative font-rubik">
                Welcome to the HACKERvers
                <span className="relative">
                  e
                  <span
                    className="text-lg absolute top-0"
                    style={{ fontSize: "1.5rem" }}
                  >
                    ®
                  </span>
                </span>
              </div>
              <p className="font-poppins">
                The Leader in AI-Powered Proof of Concepts for Software Vendors!
              </p>
              <Link
                to="/contact/"
                className="lr-more mx-auto px-3 xl:mb-24 mb-32 "
              >
                Join the PoC Revolution Now!
              </Link>
            </div>
          </div>
          <a href="#view-down" className="scroll-down " address="true" />
          <br />
        </div>
      </div>
    </>
  );
};

export default Hero;
