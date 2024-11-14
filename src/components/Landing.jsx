import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2 flex flex-col justify-center items-center">
      <div className="textStructure mt-10 px-4 md:px-20 text-center">
        {["We Create", "Eye-opening", "Presentations"].map((items, index) => {
          return (
            <div className="masker font-['Founders Grotesk, Roboto, sans-serif'] mb-4">
              <div className="w-fit flex justify-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] mr-5 rounded-md h-[6vw] relative top-[1vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"
                  ></motion.div>
                )}
                <h1 className="text-[6vw] mt-4 md:text-[4vw] leading-[6vw] md:leading-[4vw] tracking-tight font-semibold uppercase text-white">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-10 flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-20">
        {[
          "For public and private companies ",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none text-center md:text-left text-gray-300"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex pl-5 items-center mt-4 md:mt-0">
          <div className="px-6 py-3 rounded-full border-[1px] border-zinc-300 font-light text-md uppercase text-white bg-red-500 hover:bg-red-600 transition duration-300">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full ml-2 bg-white">
            <span className="rotate-[45deg] text-red-500">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
