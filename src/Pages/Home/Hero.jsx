

import React from "react";
import demos from "../../img/demos-icon.svg";
import logo from "../../img/HV_horizatonal_website_logo.png";
import { Link } from "react-router-dom";
import CategoryCreator from "../../img/new/MOCKEDupgoldwhite2.png";
import greenLight from "../../img/HV_LIGHTNINGbolt_OVALblur_green_noFloor_short_300x1080_stringed.mp4";
import greenLogo from "../../img/green-logo.png";
import googleLogo from "../../img/google-logo.png";
import { descriptionData } from "../../assets/constants";
import skullImg from "../../img/skull.png";


const Hero = () => {

  const handleClick = () => {
    window.open("https://hackerverse.dev/", "_blank");
  };

  return (
    <>
      <div className="banner-top relative bg-transparent mb-4  md:mb-10c">
        <Link to='/' className="fixed top-2 left-6 z-50  ">
          <img
            src={skullImg}
            alt="skull"
            className="w-16 h-16 object-contain "
          />
        </Link>
        <div className="custom-container relative ">
          <div className="logo  mb-40">
            <a href="" className="flex flex-col justify-center items-center ">
              <img src={logo} alt="" className="" />
            </a>
          </div>
          <div className="bnr-sec -mt-[120px] relative w-full">
          <div className="flex gap-5  flex-wrap justify-center items-center m-auto">
                <img
                  src={googleLogo}
                  alt=""
                  className="object-contain lg:max-w-[200px] max-w-[150px]  w-full"
                />
                <img
                  src={CategoryCreator}
                  alt=""
                  className="object-contain lg:max-w-[200px] max-w-[150px] w-full"
                />
                <img
                  src={greenLogo}
                  alt=""
                  className="object-contain lg:max-w-[200px] max-w-[150px] w-full"
                />
              </div>
              <video
              autoPlay
              muted
              loop
              className="absolute xl:w-[500px] xl:h-[500px] w-[300px] h-[300px] top-96 sm:left-20 left-0 m-auto z-0"
            >
              <source src={greenLight} type="video/mp4" />
            </video>
            <div className="caption-area text-center relative z-0">
              <div className="demos-btn ">
                <span className="ico">
                  <img src={demos} alt="demos" />
                </span>
                <span className="txt font-poppins ">
                  Data. Dissent. Disrupiton. Destroying the POC Maelstrom.
                </span>
              </div>
              <div className="title-tp text-center text-lg mx-auto relative font-rubik">
                Accelerate Your Proof of Concepts in the HACKERvers
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
              <p className="font-poppins " style={{color:"white",fontSize:"19px"}}>
              Craft immersive PoCs in days, not months. Skip manual coding and let HACKERverse.AI set up your
              environment faster to close more deals.
              </p>

              <Link onClick={handleClick} className="lr-more mx-auto px-3 mb-16">
                  Hack your Sales Cycle!
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