import React from "react";
import gif1 from "../../img/new/GREEN_lightning_short_1.gif";
import quotes from "../../img/quotes.svg";
const Quote = () => {
  return (
    <>
      <section
        className="text-gray-600 body-font  bg-transparent relative"
        style={{ background: `url(${gif1}) center center / cover no-repeat` }}
      >
       {/* <video autoPlay muted className="w-full h-full absolute top-0 left-0 -z-50">
          <source src="/img/GREEN_lightning_short_1.mp4" type="video/mp4" />
        </video> */}
        <div className="container mx-auto">
          <div className=" lg:w-3/4 w-full mx-auto flex flex-col items-center gap-10">
            <img src={quotes} alt="quotes" className="object-contain" />
            <div className="text-center">
              <p className=" text-2xl hover-text-green ">
                The way cybersecurity products are currently bought and sold is
                archaic, especially when compared to modern areas of technology
                such as developer tooling or data infrastructure.
              </p>
              <span
                className="inline-block h-1 w-10 rounded  mt-8 mb-2"
                style={{ backgroundColor: "#a0ff00" }}
              />
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
