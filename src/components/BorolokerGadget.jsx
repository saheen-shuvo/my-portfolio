import React from "react";
import { GoHome } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import borolokerImg from "../assets/images/boroloker img.png";

const BorolokerGadget = () => {
  return (
    <div className="hero bg-[#111111] min-h-screen">
      <div className="hero-content flex-col">
        <img
          src={borolokerImg}
          className="w-full md:w-[50%] rounded-lg shadow-2xl"
        />
        <div className="text-white">
          <h1 className="text-lg md:text-2xl font-bold mt-2">
            Project Name: Boroloker Gadget
          </h1>
          <p className="pt-6 text-sm md:text-base">
            Boroloker Gadget is a modern e-commerce web application built with
            React, allowing users to browse products, add them to their cart,
            and complete purchases. The platform includes sorting, total cost
            calculation, and a seamless checkout experience with a confirmation
            modal.
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">Main Technology Stack:</span>
            <br></br>
            <span className="text-gray-300">
              Frontend: React.js, React Router, Tailwind CSS, DaisyUI
              <br></br>State Management: useState, useEffect, Context API
              <br></br> UI Enhancements: useRef for modal management<br></br>
              Routing & Navigation: Redirect handling post-purchase
            </span>
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">
              Challenges Faced During Development:{" "}
            </span>
            <br></br>
            <span className="text-gray-300">
              State Management Complexity: Efficiently handling cart updates,
              sorting, and total cost calculations dynamically. <br></br>Context
              API Implementation: Ensuring smooth data flow across components
              without excessive prop drilling.<br></br> Modal Handling: Managing
              the purchase confirmation modal and clearing the cart upon
              successful checkout.<br></br> User Experience Optimization:
              Creating an intuitive UI with smooth interactions and fast
              performance.
            </span>
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">
              {" "}
              Potential Improvements & Future Plans:
            </span>
            <br></br>
            <span className="text-gray-300">
              User Authentication & Order History: Allowing users to log in,
              track past purchases, and manage orders. <br></br>Payment Gateway
              Integration: Enabling secure online payments for a complete
              shopping experience. <br></br>Product Categories & Filtering: Expanding the
              catalog with filtering options for better navigation. <br></br>Wishlist
              Feature: Adding the ability for users to save products for future
              purchases.
            </span>
          </p>
          <div className="flex justify-center my-6">
            <a className="" href="https://boroloker-gadgets.netlify.app/">
              {" "}
              <button className="bg-[#FFFFFF] btn text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300 w-full">
                Visit Now <MdArrowOutward />
              </button>
            </a>
            <Link to="/">
              <button className="bg-[#FFFFFF] btn text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300 ml-2">
                Go Home <GoHome />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorolokerGadget;
