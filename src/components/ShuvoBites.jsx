import React from "react";
import { GoHome } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import shuvobitesImg from "../assets/images/shuvobites.png";

const ShuvoBites = () => {
  return (
    <div className="hero bg-[#111111] min-h-screen">
      <div className="hero-content flex-col">
        <img
          src={shuvobitesImg}
          className="w-full md:w-[50%] rounded-lg shadow-2xl"
        />
        <div className="text-white">
          <h1 className="text-lg md:text-2xl font-bold mt-2">
            Project Name: Shuvo Bites
          </h1>
          <p className="pt-6 text-sm md:text-base">
            Shuvo Bites is a comprehensive restaurant management system designed
            to streamline restaurant operations. It features tools for managing
            orders, reservations, menus, and staff schedules. With a
            user-friendly interface, it allows restaurant owners and staff to
            efficiently handle customer interactions, track sales, and monitor
            inventory.
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">Main Technology Stack:</span>
            <br></br>
            <span className="text-gray-300">
              Frontend: React.js, React Router, Tailwind CSS, DaisyUI
              <br></br>State Management: useState, useEffect, Context API
              <br></br>Database: MongoDB
              <br></br> Security: Json Web Token (JWT)
              <br></br>Payment Gateway: Stripe<br></br>
              Routing & Navigation: Redirect handling after checkout <br />
              Authentication: Firebase Authentication
              <br />
              Hosting: Firebase (Frontend), Vercel (Backend)
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
              without excessive prop drilling.<br></br> Real-Time Order Updates:
              Implementing a smooth order status update system for both
              customers and admins.<br></br> Optimizing Performance: Ensuring
              fast loading times for menus and orders customers and admins.
              <br></br> Authentication Management: Securing user data and
              managing different user roles efficiently.
            </span>
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">
              {" "}
              Potential Improvements & Future Plans:
            </span>
            <br></br>
            <span className="text-gray-300">
              Payment Gateway Integration: Integrate Stripe or SSLCommerz for
              secure online payments
              <br></br>Mobile App Version: Launch a React Native-based mobile
              app for Android & iOS categories<br></br>Product Categories &
              Filtering: Expanding the catalog with filtering options for better
              navigation. <br></br>
              Multi-language Support: Offer localized language options (e.g.,
              English, Bangla) for broader user reach
            </span>
          </p>
          <div className="flex justify-center my-6">
            <a className="" href="https://shuvo-bites.web.app">
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

export default ShuvoBites;
