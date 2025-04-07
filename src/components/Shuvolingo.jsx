import React from "react";
import { GoHome } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import shuvolingoImg from "../assets/images/shuvolingo.png";

const Shuvolingo = () => {
  return (
    <div className="hero bg-[#111111] min-h-screen">
      <div className="hero-content flex-col">
        <img
          src={shuvolingoImg}
          className="w-full md:w-[50%] rounded-lg shadow-2xl"
        />
        <div className="text-white">
          <h1 className="text-lg md:text-2xl font-bold mt-2">
            Project Name: Shuvolingo
          </h1>
          <p className="pt-6 text-sm md:text-base">
            Shuvolingo is an interactive language learning platform that
            connects students with qualified tutors. It offers a seamless
            experience for users to search for tutors by language, book lessons,
            and access educational content. The platform ensures smooth session
            management and enhances learning engagement through tutor ratings
            and reviews.
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">Main Technology Stack:</span>
            <br></br>
            <span className="text-gray-300">
              Frontend: React.js, React Router, Tailwind CSS, DaisyUI,
              Swiper.js, Axios
              <br></br> Backend: Node.js, Express.js<br></br> Database: MongoDB{" "}
              <br></br>Authentication: Firebase
            </span>
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">
              Challenges Faced During Development:{" "}
            </span>
            <br></br>
            <span className="text-gray-300">
              Tutor Search & Filtering: Implementing an efficient search and
              filtering system based on language and availability. <br></br>
              Session Booking & Management: Ensuring real-time updates on tutor
              schedules and preventing double bookings. <br></br>User
              Authentication & Authorization: Managing secure login/logout
              functionality while differentiating between students and tutors.{" "}
              <br></br>Scalability & Performance: Optimizing the backend for
              handling multiple tutor-student interactions smoothly.
            </span>
          </p>
          <p className="pt-3  text-sm md:text-base">
            <span className="font-semibold pb-2">
              {" "}
              Potential Improvements & Future Plans:
            </span>
            <br></br>
            <span className="text-gray-300">
              Live Video Tutoring Integration: Adding real-time video sessions
              for seamless online learning.<br></br> AI-Powered Tutor Recommendations:
              Implementing a recommendation system based on student preferences
              and past sessions. <br></br>Multilingual Interface: Expanding the platform
              with a UI that supports multiple languages. <br></br>Subscription-Based
              Model: Introducing premium plans with exclusive tutor sessions and
              learning resources.
            </span>
          </p>
          <div className="flex justify-center my-6">
            <a className="" href="https://shuvolingo-client.web.app/">
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

export default Shuvolingo;
