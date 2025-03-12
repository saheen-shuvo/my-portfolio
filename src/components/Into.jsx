import React from "react";
import myFormalImg from "../assets/images/b&w me formal.jpg";
import linkedInIcon from "../assets/images/linkedIn icon.png";
import gitHubIcon from "../assets/images/gitHub icon1.png";
import facebookIcon from "../assets/images/fb icon.png";

const Into = () => {
  return (
    <div
      id="home"
      className="hero pt-16 md:pt-28 bg-[#111111] max-w-screen-xl mx-auto"
    >
      <div className="hero-content flex flex-row-reverse">
        <img
          src={myFormalImg}
          className="w-[120px] md:w-64 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-[15px] md:text-5xl font-bold">
            Hi, I'm Saheen Alam Shuvo
          </h1>
          <h1 className="text-[11px] md:text-3xl mt-1 md:mt-6 font-semibold">
            A Passionate MERN Stack Developer
          </h1>
          <p className="text-[8px] md:text-base text-justify mt-2 md:py-6 md:pr-10 text-gray-400">
            I build modern, scalable web applications using React, Node.js,
            MongoDB, and Express. Passionate about creating user-friendly
            experiences and solving real-world problems with clean, efficient
            code.
          </p>
          <div className="flex items-center gap-1 mt-1 md:mb-5">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1BYWbr36dS/?mibextid=wwXIfr">
              {" "}
              <button>
                <img
                  className="w-[26px] md:w-[50px]"
                  src={facebookIcon}
                  alt=""
                />
              </button>
            </a>
            {/* Github */}
            <a href="https://github.com/saheen-shuvo">
              {" "}
              <button>
                <img className="w-6 md:w-12" src={gitHubIcon} alt="" />
              </button>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/saheen-alam-shuvo-182-li/">
              <button>
                <img className="w-6 md:w-12" src={linkedInIcon} alt="" />
              </button>
            </a>
          </div>
          <div className="mt-1">
            <button className="bg-[#FFFFFF] btn-xs text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg transition duration-300 mr-1 md:mr-2 text-[10px] md:text-[12px]">
              Let's Connect
            </button>
            <a href="#projects">
              {" "}
              <button className="bg-[#FFFFFF] btn-xs text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg transition duration-300 text-[10px] md:text-[12px]">
                View Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Into;
