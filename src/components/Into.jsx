import React from "react";
import myFormalImg from "../assets/images/b&w me formal.jpg";

const Into = () => {
  return (
    <div className="hero  min-h-screen bg-[#111111]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={myFormalImg} className="w-64 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Saheen Alam Shuvo</h1>
          <h1 className="text-3xl mt-4 font-bold">
            A Passionate MERN Stack Developer
          </h1>
          <p className="py-6 text-gray-400">
            I build modern, scalable web applications using React, Node.js,
            MongoDB, and Express. Passionate about creating user-friendly
            experiences and solving real-world problems with clean, efficient
            code.
          </p>
          <div className="mt-2">
            <button className="bg-[#FFFFFF] btn text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300 mr-2">
              Let's Connect
            </button>
            <button className="bg-[#FFFFFF] btn text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300 ">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Into;
