import React from "react";
import gif1 from "../../img/new/GREEN_lightning_short_1.gif";
import quotes from "../../img/quotes.svg";
import greenLight from "../../img/HV_LIGHTNINGbolt_OVALblur_green_noFloor_short_300x1080_stringed.mp4";

const Quote = () => {
  const handleClick = () => {
    window.open("https://hackerverse.quest/", "_blank");
  };

  return (
    // <>
    //   <section className="text-gray-600 body-font bg-transparent relative">
    //     <div className="container mx-auto relative">
    //       <div className="lg:w-3/4 w-full mx-auto flex flex-col items-center gap-10">
    //         {/* Quotes image */}
    //         <img src={quotes} alt="quotes" className="object-contain" />
    //         <div className="text-center">
    //           {/* Quote text */}
    //           <p className="text-2xl hover-text-green">
    //             The way cybersecurity products are currently bought and sold is
    //             archaic, especially when compared to modern areas of technology
    //             such as developer tooling or data infrastructure.
    //           </p>
    //           {/* Divider */}
    //           <span
    //             className="inline-block h-1 w-10 rounded mt-8 mb-2"
    //             style={{ backgroundColor: "#a0ff00" }}
    //           />
    //           {/* Author */}
    //           <p className="text-gray-500 text-2xl font-extrabold">
    //           <a href="https://a.co/d/64VzDfd" className="cursor-pointer hover:text-[#a0ff00]" target="_blank">  -Cyber for Builders</a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    <>
      <div className="  text-slate-200 py-6">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4  ">Is your sales team tired of endless, resource-intensive Proof of Concepts (PoCs)?</h2>
            <p className="text-lg lg:text-xl">HACKERverse.ai is the AI-powered platform that transforms your sales cycle.</p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-2 hover-underline">What is HACKERverse.ai?</h3>
            <p className="text-lg lg:text-xl">HACKERverse.ai is a groundbreaking platform for cybersecurity sales teams that utilizes Generative AI to rapidly spin up realistic, production-like environments for testing cybersecurity products. We eliminate the months-long PoC process, allowing you to showcase your solution's capabilities in a matter of days.</p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-2 hover-underline">How it Works:</h3>
            <ol className="list-decimal pl-5 text-lg lg:text-xl space-y-2">
              <li>Upload Your Product: Integrate your cybersecurity solution into the HACKERverse platform.</li>
              <li>Generate a PoC Environment: Our AI engine creates a dynamic, production-like environment tailored to your product's capabilities.</li>
              <li>Showcase Your Solution: Demonstrate your product's efficacy against simulated attacks to potential customers with confidence.</li>
            </ol>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-2 hover-underline font-rubik">Key Benefits:</h3>
            <ul className="list-disc pl-5 text-lg lg:text-xl space-y-2">
              <li>Accelerated Sales Cycles: Reduce PoC time from months to days.</li>
              <li>Enhanced Product Validation: Gain valuable insights into your product's performance in real-world scenarios.</li>
              <li>More prospects: Get your product into the hands of more prospects.</li>
              <li>Competitive Advantage: Outshine competitors with faster time-to-market and superior product validation.</li>
            </ul>
          </div>
          <div className="text-center">
            <button
              onClick={handleClick}
              className="rounded-md font-semibold mb-2 bg-[#a0ff00] hover:text-black min-w-[300px] text-xs sm:text-base hover:bg-[#8cba3e] py-2 px-4 text-black"
            >
              Join the HACKERverse Revolution
            </button>
            <p className="text-lg lg:text-xl mb-4">Don't let slow PoC processes hinder your sales success. Experience the future of cybersecurity sales with HACKERverse.ai.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;