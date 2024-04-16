import React, { useEffect, useState } from "react";
import gif1 from "../../img/new/gif.gif";
import { Link } from "react-router-dom";
import exploreImages from "../../img/explore/explore";

const Paragraph = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          id: "1",
          title: "Integrate",
          txt: "Integrate like a boss! The HACKERverse® syncs with your tools, tech-stack, and CRM.",
          icon: exploreImages[0],
        },
        {
          id: "2",
          title: "Scale",
          txt: "Easily scale your PoC process and free up your team’s time.",
          icon: exploreImages[1],
        },
        {
          id: "3",
          title: "Velocity",
          txt: "Faster Time to close won. Buyers crave hands-on experiences and self-driven sales motions.",
          icon: exploreImages[2],
        },
        {
          id: "4",
          title: "Continuous",
          txt: "Get continuous product feedback from customers experiencing your Hands-On PoC.",
          icon: exploreImages[3],
        },
        {
          id: "5",
          title: "Community",
          txt: "Our thriving HACKERverse® community gives you access to 5,000 practitioners and security team leaders.",
          icon: exploreImages[4],
        },
      ]);
    }, 200);
  }, [exploreImages]);

  const handleClick = () => {
    window.open("https://hackerverse.quest/", "_blank");
  };
  return (
    <>
      {" "}
      <section
        className="text-gray-600 body-font  bg-transparent   "
        style={{ background: `url(${gif1}) center center / cover no-repeat` }}
      >
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap items-center justify-center -mx-4 -mb-10 gap-5">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex-col w-2/5 flex items-center justify-start mb-10 px-12 min-h-[200px]"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="object-contain max-w-12 w-full"
                />

                <h2 className="title-font text-3xl font-medium text-gray-300 mt-6 mb-3 font-rubik">
                  {item.title}
                </h2>

                <p className="leading-relaxed text-lg font-poppins text-center">
                  {item.txt}
                </p>
              </div>
            ))}
          </div>
          <div className="caption-area text-center bg-transparent mt-16 mb-24">
            <button
              onClick={handleClick}
              className=" rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]  py-2 px-4 "
            >
              Bug Out in the HACKERverse®
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paragraph;
