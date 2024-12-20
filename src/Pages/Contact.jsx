import React, { useEffect, useState } from "react";
import Footer from "./Home/Footer";
import { Link } from "react-router-dom";
import mainImg from "../img/GREENhexContactPage.png";
import skullImg from "../img/skull.png";


const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22582640",
          formId: "90d90e4b-9de1-40f3-ac7e-648e92a6a8e1",
          target: "#hubspotForm", // Specify the target element where the form will be rendered
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to submit the form data to HubSpot
    if (window.hbspt) {
      window.hbspt.forms.submit({
        portalId: "22582640",
        formId: "e8d0a2af-d0dc-4ee5-97e2-10409128dce5",
        fields: {
          // Map your form fields to HubSpot fields
          firstname: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        },
      });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top left corner of the page on component mount
  }, []);
  return (
    <>
      <div className="container mx-auto relative  bg-transparent ">
    
        <a
          href="/"
          class="flex items-center absolute top-5 left-4 z-50 bg-slate-700 p-1 rounded-full pr-3 pl-5 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-[#a0ff00] hover:underline pr-5">Go Back</span>
        </a>
        <section className=" ">
          <div className="container py-12 mx-auto">
            <div className="text-center ">
              <p className="font-medium text-2xl mt-4 text-[#a0ff00]">Contact us</p>

              <h1 className="mt-2 text-2xl font-semibold  md:text-3xl text-white">
                We’d love to hear from you
              </h1>

              <p className="mt-3 text-gray-400"></p>
            </div>

            <img
              className="object-cover w-full h-full mt-10 rounded-lg lg:h-full picbox1"
              src={mainImg}
              alt=""
            />
          </div>
        </section>

        <section className="text-gray-900 body-font relative">
          <div className="container   py-4 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-900 p-10 rounded-2xl picbox1">
              <form onSubmit={handleSubmit}>
                <div id="hubspotForm">
                  {/* This div will be replaced by the HubSpot form */}
                </div>
              </form>
            </div>
          </div>
        </section>

          <Footer />
      </div>
    </>
  );
};

export default Contact;
