import React from "react";
import gif1 from "../../img/new/GREEN_lightning_short_1.gif";
import quotes from "../../img/quotes.svg";
import greenLight from "../../img/HV_LIGHTNINGbolt_OVALblur_green_noFloor_short_300x1080_stringed.mp4";

const Quote = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-transparent relative">
        {/* Background gif */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${gif1})` }}
        ></div> */}
        {/* Video */}
        <video autoPlay loop muted className="absolute inset-32 w-[250px] h-full top-0 z-0 object-cover">
          <source src={greenLight} type="video/mp4" />
        </video>
        <div className="container mx-auto relative z-10">
          <div className="lg:w-3/4 w-full mx-auto flex flex-col items-center gap-10">
            {/* Quotes image */}
            <img src={quotes} alt="quotes" className="object-contain" />
            <div className="text-center">
              {/* Quote text */}
              <p className="text-2xl hover-text-green">
                The way cybersecurity products are currently bought and sold is
                archaic, especially when compared to modern areas of technology
                such as developer tooling or data infrastructure.
              </p>
              {/* Divider */}
              <span
                className="inline-block h-1 w-10 rounded mt-8 mb-2"
                style={{ backgroundColor: "#a0ff00" }}
              />
              {/* Author */}
              <p className="text-gray-500 text-2xl font-extrabold">
                Ross Haleliuk
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;