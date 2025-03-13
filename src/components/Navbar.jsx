import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li className="font-semibold">
      <a href="#home">Home</a>
      </li>
      <li className="font-semibold">
        <a href="#about">About</a>
      </li>
      <li className="font-semibold">
      <a href="#skills">Skills</a>
      </li>
      <li className="font-semibold">
      <a href="#projects">Projects</a>
      </li>
      <li className="font-semibold">
      <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30  bg-[#0d0d0d]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1 md:ml-4 ml-0">
          <p className="text-xl font-bold text-green-800"></p>
          <p className="text-sm md:text-xl font-bold  text-[white] flex items-center">
            {" "}
            Shuvo<span className="text-[#ff6a00]">X</span>Dev
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="bg-[#FFFFFF] btn text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300 md:mr-4 mr-2">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
