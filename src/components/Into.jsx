import React from "react";
import { motion } from "framer-motion";
import myFormalImg from "../assets/images/my-portfolio-wb.png";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Into = () => {
  return (
    <div
      id="home"
      className="hero pt-16 md:pt-28 bg-[#111111] max-w-screen-xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        id="intro-container"
        className="border-2  rounded-xl md:rounded-3xl lg:p-16 mx-2 md:mx-4"
      >
        <div className="hero-content flex flex-row-reverse px-2 md:px-4">
          <img
            id="intro-img"
            src={myFormalImg}
            className="w-24 md:w-56 lg:w-64 rounded-full"
          />
          <div className="sm:mr-8 md:mr-12 lg:mr-16">
            <h1 className="text-[15px] md:text-5xl font-bold text-white">
              Hi, I'm Saheen Alam Shuvo
            </h1>
            <h1 className="intro-tags text-[11px] md:text-3xl mt-1 md:mt-6 font-semibold text-white">
              A Dedicated{" "}
              <span style={{ "--i": 4 }} data-text="MERN Stack Developer">
                MERN Stack Developer
              </span>
              <span style={{ "--i": 3 }} data-text="Frontend Developer">
                Frontend Developer
              </span>
              <span style={{ "--i": 2 }} data-text="JavaScript Developer">
                JavaScript Developer
              </span>
              <span style={{ "--i": 1 }} data-text="React Developer">
                React Developer
              </span>
            </h1>
            <p className="text-[8px] md:text-base text-justify mt-2 md:py-4 md:pr-10 text-gray-400">
              I build modern, scalable web applications using React, Node.js,
              MongoDB, and Express. Passionate about creating user-friendly
              experiences and solving real-world problems with clean, efficient
              code.
            </p>
            <div className="flex items-center gap-1 md:gap-2 my-2 md:my-4 text-base md:text-lg lg:text-xl">
              {/* Facebook */}
              <a
                className="social-btn text-[8px] md:text-lg p-1 lg:p-2 border-1 md:border-2 border-white"
                href="https://www.facebook.com/share/1BYWbr36dS/?mibextid=wwXIfr"
              >
                <FaFacebookF />
              </a>
              {/* Github */}
              <a
                className="social-btn text-[8px] md:text-lg p-1 lg:p-2 border-1 md:border-2 border-white"
                href="https://github.com/saheen-shuvo"
              >
                {" "}
                <FaGithub />
              </a>
              {/* LinkedIn */}
              <a
                className="social-btn text-[8px] md:text-lg p-1 lg:p-2 border-1 md:border-2 border-white"
                href="https://www.linkedin.com/in/saheen-alam-shuvo-182-li/"
              >
                <GrLinkedinOption />
              </a>
            </div>
            <div className="mt-1 lg:mt-8">
              <button
                id="intro-btn"
                className="text-[8px] md:text-[12px] px-[4px] md:px-[10px] py-[2px] md:py-[6px] font-semibold rounded-lg md:rounded-2xl"
              >
                Let's Connect
              </button>
              <a href="#projects">
                {" "}
                <button
                  id="intro-btn"
                  className="ml-1 md:ml-2 text-[8px] md:text-[12px] px-[4px] md:px-[10px] py-[2px] md:py-[6px] font-semibold rounded-lg md:rounded-2xl"
                >
                  View Projects
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Into;
