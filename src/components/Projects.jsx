import React from "react";
import logixshuvoImg from "../assets/images/logixshuvo.png";
import shuvolingoImg from "../assets/images/shuvolingo.png";
import shuvobitesImg from "../assets/images/shuvobites.png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#111111] px-4 md:pt-12 max-w-screen-xl mx-auto"
    >
      <h1 className="text-lg md:text-3xl font-bold text-center mb-3 md:mb-8 text-white">
        Latest Projects
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {/* PROJECT 1 */}
        <div className="card card-compact  bg-[#0d0d0d] shadow-xl border-[#1A1A1A] border-2">
          <figure>
            <img src={logixshuvoImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-white">LogiXShuvo</h2>
            <p className="text-justify text-gray-300">
              LogiXShuvo is a modern MERN stack application that streamlines
              parcel booking, tracking, and management. It provides role-based
              access for admins, deliverymen, and customers to enhance
              efficiency.
            </p>
            <div className="card-actions justify-end">
              <Link className="w-full" to="/logixshuvo">
                <button className="bg-[#FFFFFF] btn text-[#0D0D0D] w-full hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300">
                  View Details
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="card card-compact  bg-[#0d0d0d] shadow-xl border-[#1A1A1A] border-2">
          <figure>
            <img src={shuvolingoImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-white">Shuvolingo</h2>
            <p className="text-justify text-gray-300">
              Shuvolingo is a language learning platform that connects students
              with qualified tutors, allowing users to search for tutors, view
              profiles, book sessions, manage bookings, and add tutorials.
            </p>
            <div className="card-actions justify-end">
              <Link className="w-full" to="/shuvolingo">
                <button className="bg-[#FFFFFF] btn text-[#0D0D0D] w-full hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300">
                  View Details
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="card card-compact  bg-[#0d0d0d] shadow-xl border-[#1A1A1A] border-2">
          <figure>
            <img src={shuvobitesImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-white">Shuvo Bites</h2>
            <p className="text-justify text-gray-300">
              Shuvo Bites is a comprehensive restaurant management system
              designed to streamline restaurant operations. It features tools
              for managing orders, reservations, menus, and staff schedules.
            </p>
            <div className="card-actions justify-end">
              <Link className="w-full" to="/shuvobites">
                <button className="bg-[#FFFFFF] btn text-[#0D0D0D] w-full hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300">
                  View Details
                  <MdArrowOutward />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
