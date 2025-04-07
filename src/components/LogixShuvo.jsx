import React from "react";
import logixshuvoImg from "../assets/images/logixshuvo.png";
import { MdArrowOutward } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const LogixShuvo = () => {
  return (
    <div className="hero bg-[#111111] min-h-screen">
      <div className="hero-content flex-col">
        <img
          src={logixshuvoImg}
          className="w-full md:w-[50%] rounded-lg shadow-2xl"
        />
        <div className="text-white">
          <h1 className="text-lg md:text-2xl font-bold mt-2">
            Project Name: LogiXShuvo
          </h1>
          <p className="pt-6 text-sm md:text-base">
            LogiXShuvo is a modern MERN stack application designed to simplify
            parcel booking, tracking, and management. It offers role-based
            access for admins, deliverymen, and customers, ensuring an efficient
            and organized delivery process. The system includes real-time parcel
            status updates, automated delivery charge calculations, and a
            user-friendly dashboard for effective management.
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">Main Technology Stack:</span>
            <br></br>
            <span className="text-gray-300">
              Frontend: React.js, Tailwind CSS
              <br></br> Backend: Node.js, Express.js<br></br> Database: MongoDB{" "}
              <br></br>Authentication: Firebase, JWT<br></br>
              Payment Gateway: Stripe
            </span>
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">
              Challenges Faced During Development:{" "}
            </span>
            <br></br>
            <span className="text-gray-300">
              Role-Based Access Control (RBAC): Implementing secure
              authentication and ensuring proper access for admins, deliverymen,
              and customers was complex.<br></br> Real-Time Status Updates:
              Managing dynamic parcel status changes while keeping the UI
              updated required efficient state management. <br></br>Payment
              Integration: Integrating a secure payment gateway while
              maintaining transaction logs.<br></br> Data Filtering &
              Optimization: Ensuring fast and efficient search/filter
              functionalities for users.
            </span>
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">
              {" "}
              Potential Improvements & Future Plans:
            </span>
            <br></br>
            <span className="text-gray-300">
              AI-Based Delivery Estimation: Implementing an AI-driven estimated
              delivery time prediction system. <br></br>Live Parcel Tracking:
              Enhancing tracking with real-time location updates for customers.
              <br></br>
              Multi-Currency Payment Support: Expanding payment options for
              global accessibility.<br></br> Automated Notifications:
              Implementing email/SMS notifications for status updates.
            </span>
          </p>
          <div className="flex justify-center my-6">
            <a className="" href="https://logixshuvo.web.app/">
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

export default LogixShuvo;
