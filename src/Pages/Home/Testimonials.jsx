import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Api } from "../../Api/Api";
import { Link } from "react-router-dom";
import CustomDot from "../../components/CustomDot/CustomDot";

const Index = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading

  const carouselRef = useRef(null);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${Api}/hv-comapny/Reviews/getall`);
      setReviews(response.data);
      setIsLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching Reviews:", error);
      setIsLoading(false); // Also set loading to false in case of error
    }
  };


  useEffect(() => {
    fetchReviews();
  }, []);
  const handleClick = () => {
    window.open("https://hackerverse.quest/", "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 5000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1680 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1680, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="bg-transparent">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-2 text-2xl  lg:text-3xl tracking-tight font-extrabold hover-underline text-white uppercase font-rubik dark:text-white">
              Our Testimonials
            </h2>
          </div>
        </div>
      </section>

      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          focusOnSelect={true}
          infinite={true}
        
          className="2xl:w-full w-[80%] mx-auto carousel-nav" // Add the carousel-nav class

          showDots customDot={<CustomDot />}
        >
          {reviews.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-xl sm:h-[380px] h-[400px] mt-12 mx-auto p-4 mb-14 cursor-pointer picbox1 rounded-2xl bg-[#1D1D1D]"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.pic}
                  loading="lazy"
                  className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] "
                  alt={testimonial.name}
                />
                <div className="mt-4">
                  <h4 className="text-2xl font-poppins font-extrabold text-white leading-9">
                    {testimonial.name}
                  </h4>
                  <p className="sm:text-base text-xs font-poppins text-[#a0ff00] font-bold mt-2.5">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="sm:text-lg text-sm font-poppins leading-relaxed text-gray-400">
                  {testimonial.review}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      )}
      <div className="caption-area text-center bg-transparent  sm:mt-16 mt-8 mb-24">
        <button
          onClick={handleClick}
          class=" rounded-md font-semibold bg-[#a0ff00] text-black hover:text-black w-[300px] text-sm sm:text-base hover:bg-[#8cba3e]  py-2 px-4 "
        >
          Take me to the Platform!
        </button>
      </div>
    </>
  );
};

export default Index;
