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
      <section className="bg-gr ay-800 text-slate-200 py-12">
        <div className="container mx-auto px-4">
          {/* Intro Section */}
          <div className="mb-12 text-center p-6 bg-gradient-to-r from-[#a0ff00] to-black rounded-lg shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 ">Transform Your Sales Cycle with HACKERverse.ai</h2>
            <p className="text-lg lg:text-xl">Revolutionize your sales approach with our AI-powered platform.</p>
          </div>

          {/* What is Section */}
          <div className="mb-12 p-6 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 border-b-2 border-[#A0FF00] pb-2">What is HACKERverse.ai?</h3>
            <p className="text-lg lg:text-xl">A groundbreaking platform utilizing Generative AI to rapidly create realistic, production-like environments for cybersecurity product testing. Cut the PoC process from months to days.</p>
          </div>

          {/* How it Works Section */}
          <div className="mb-12 p-6 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 border-b-2 border-[#A0FF00] pb-2">How it Works:</h3>
            <ol className="list-decimal pl-6 text-lg lg:text-xl space-y-4">
              <li>Upload Your Product: Integrate into the HACKERverse platform.</li>
              <li>Generate a PoC Environment: AI engine creates a tailored, production-like environment.</li>
              <li>Showcase Your Solution: Demonstrate your product against simulated attacks.</li>
            </ol>
          </div>

          {/* Key Benefits Section */}
          <div className="mb-12 p-6 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 border-b-2 border-[#A0FF00] pb-2">Key Benefits:</h3>
            <ul className="list-disc pl-6 text-lg lg:text-xl space-y-4">
              <li>Accelerated Sales Cycles: Reduce PoC time from months to days.</li>
              <li>Enhanced Product Validation: Valuable insights into real-world performance.</li>
              <li>More Prospects: Reach more potential customers.</li>
              <li>Competitive Advantage: Faster time-to-market and superior validation.</li>
            </ul>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">

            <button
              onClick={handleClick}
              className="rounded-md mb-4 font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e] text-black w-[300px] py-2 px-4"
            >
              Take me to the Platform!
            </button>
            <p className="text-lg lg:text-xl">Experience the future of cybersecurity sales with HACKERverse.ai.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;