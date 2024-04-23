import React, { useState, useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import SideChat from "../../img/support.svg";
import orbmp4 from "../../img/orb/orb-2.gif";
import orbtwitter from "../../img/twitter.png";
import redorbyoutube from "../../img/redorb-youtube.png";
import redorbinsta from "../../img/redorb-insta.png";
import redorbdiscord from "../../img/redorb-discord.png";
import redorbreddit from "../../img/redorb-reddit.png";
import redorbtwitch from "../../img/redorb-twitch.png";
import HV_NEW_AI_Machine from "../../img/new/HV_NEW_AI_Machine_blues (1).png";
// import orbVideo from "../../img/circle_Loading_ORB-video.mov";
import Loader from "../Loading2";
import Customers from "./Customers";
import laptop from "../../img/laptop.png";
const Hero = lazy(() => import("./Hero"));
const Paragraph = lazy(() => import("./Paragraph"));
const Testimonials = lazy(() => import("./Testimonials"));
const Blogs = lazy(() => import("./Blogs"));
const Spotify = lazy(() => import("./Spotify"));
const PodcastVideo = lazy(() => import("./PodcastVideo"));
const Newsletter = lazy(() => import("./Newsletter"));
const Footer = lazy(() => import("./Footer"));
const Index1 = lazy(() => import("./Teams"));
const Quote = lazy(() => import("./Quote"));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    window.open("https://hackerverse.quest/", "_blank");
  };

  useEffect(() => {
    // Simulating loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader text={"Hack The *verse!"} />}
      {!isLoading && (
        <>
          <Hero />
          <section className="white-th  bg-[#000]" id="view-down">
            <div className="bg-[#1D1D1D] md:py-32 sm:py-24 py-20">
              <div className="custom-container">
                <div className="row md:mb-16 mb-12">
                  <div className="col-md-12">
                    <div className="content-are  ">
                      <article>
                        <div className="primary-heading ">
                          <div className="text-2xl  lg:text-3xl hover-underline uppercase font-rubik">
                            Meet our Rockstar Customers!
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <Customers />
                <div className="caption-area text-center bg-transparent mt-16 ">
                  <button
                    onClick={handleClick}
                    className=" rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]  text-black w-[300px] py-2 px-4 "
                  >
                    Bug Out in the HACKERverse®
                  </button>
                </div>
              </div>
            </div>
            <div className="custom-container md:py-32 sm:py-24 bg-[#000] py-20 relativ">
              <Quote />
              <div className="col-md-12 mt-28 bg-[#000]">
                <div className="content-are">
                  <article>
                    <div className="primary-heading">
                      <div className="title-lg text-2xl  lg:text-3xl mt-3 hover-underline font-rubik">
                        Our Killer POC
                        <sup>
                          <span
                            className="text-3xl font-rubik"
                            style={{ fontSize: 15 }}
                          >
                            TM
                          </span>
                        </sup>{" "}
                        Interface!
                      </div>
                    </div>
                  </article>
                </div>
                <section className="text-gray-600 body-font">
                  <div className="container  mx-auto ">
                    <div className="flex items-center justify-center ">
                      <img
                        loading="lazy"
                        src={laptop}
                        className="rounded-3xl w-full"
                        alt="Our Killer POC Interface"
                      />
                    </div>
                  </div>
                </section>
                <div className="caption-area text-center bg-transparent mt-14 flex justify-center items-center max-w-80 w-full mx-auto">
                  <button
                    onClick={handleClick}
                    class=" rounded-md font-semibold bg-[#a0ff00] hover:text-black text-black hover:bg-[#8cba3e] w-[300px]  py-2 px-4 "
                  >
                    Skull Jack the HACKERverse®
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#1D1D1D] w-full md:py-32 sm:py-24 py-20">
              <div className="content-are">
                <article>
                  <div className="primary-heading mb-10 lg:mb-16">
                    <div className="title-lg text-2xl  lg:text-3xl font-rubik  hover-underline ">
                      How it Works
                    </div>
                  </div>
                </article>
                <section className="text-gray-600 body-font">
                  <div className="container mx-auto">
                    <div className="flex justify-center">
                      <img
                        loading="lazy"
                        src={HV_NEW_AI_Machine}
                        className="rounded-3xl max-w-[1200px] w-full h-full"
                        alt="How it Works - AI Machine"
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div className="caption-area text-center bg-transparent mt-14">
                <button
                  onClick={handleClick}
                  class=" rounded-md font-semibold bg-[#a0ff00] hover:text-black min-w-[300px]  text-xs sm:text-base hover:bg-[#8cba3e]  py-2 px-4 "
                >
                  Immerse yourself in the HACKERverse®
                </button>
              </div>
            </div>

            <div className="col-md-12 relative">
              <div className="bg-cover bg-no-repeat bg-center bg-pattern ">
                <Paragraph />
              </div>
              <Testimonials />
              <Index1 />
            </div>
            <div className="col-md-12 custom-container">
              <Blogs />
              <Spotify />
              <PodcastVideo />
              <Newsletter />
            </div>
            <div className="bg-[#1D1D1D]">
              <Footer />
            </div>
          </section>

          <div className="speak">
            <div className="sup-icons-cont">
              <a
                href="https://discord.gg/hacer-rs-952244889192648775"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sup-icon">
                  <img loading="lazy" src={redorbdiscord} alt="Discord" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/_hackerverse_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sup-icon">
                  <img loading="lazy" src={redorbinsta} alt="Instagram" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@theHACKERverse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sup-icon">
                  <img loading="lazy" src={redorbyoutube} alt="Youtube" />
                </div>
              </a>
              <a
                href="https://www.reddit.com/r/theHACKERverse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sup-icon">
                  <img loading="lazy" src={redorbreddit} alt="Reddit" />
                </div>
              </a>
              <a
                href="https://www.twitch.tv/thehackerverse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sup-icon">
                  <img loading="lazy" src={redorbtwitch} alt="Twitch" />
                </div>
              </a>
              <a
                href="https://twitter.com/_HACKERverse_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sup-icon">
                  <img loading="lazy" src={orbtwitter} alt="Twitter" />
                </div>
              </a>
            </div>
            <div className="sup-rota">
              <img loading="lazy" src={SideChat} alt="Support Chat" />
            </div>
            <div className="video-cutter">
              {/* <video autoPlay muted loop>
                <source src={orbVideo} type="video/mp4" />
              </video> */}
              <img src={orbmp4} alt="orb"  />
            </div>
          </div>
        </>
      )}
      ;
    </>
  );
};

export default Index;
