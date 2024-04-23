// Loader.js
import React from "react";
import CustomLoaderSVG from "../img/Circle-Loading-ORB-gif.gif"; // Import your custom SVG file

const Loader = ({ text }) => {
  return (
    <div className="loader-overlay">
      <div className="loader-container flex flex-col justify-center items-center text-center">
        <p className="text-2xl text-white text-center mb-4 hover-underline">
          <i>{text}</i>
        </p>
        <div className="centered ml-24 ">
          <img
            src={CustomLoaderSVG}
            alt="Custom Loader"
            className="justify-center   animate-spin h-24 w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
