import React from "react";
import logixshuvoImg from "../assets/images/logixshuvo img.png";
import shuvolingoImg from "../assets/images/shuvolingo img.png";
import borolokerImg from "../assets/images/boroloker img.png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#111111] px-4 pt-2 md:pt-12 max-w-screen-xl mx-auto"
    >
      <h1 className="text-lg md:text-3xl font-bold text-center my-3 md:my-8 text-white">
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
              <Link className="w-full" to='/logixshuvo'>
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
              <a className="w-full" href="https://shuvolingo-client.web.app/">
                {" "}
                <button className="bg-[#FFFFFF] btn text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300 w-full">
                  Visit Now <MdArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="card card-compact  bg-[#0d0d0d] shadow-xl border-[#1A1A1A] border-2">
          <figure>
            <img src={borolokerImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-white">Boroloker Gadget</h2>
            <p className="text-justify text-gray-300">
              A web application built with React that allows users to view
              products, add them to their cart, and proceed to checkout. The app
              features sorting, total cost calculation, and a purchase
              confirmation modal.
            </p>
            <div className="card-actions justify-end">
              <a
                className="w-full"
                href="https://boroloker-gadgets.netlify.app/"
              >
                {" "}
                <button className="bg-[#FFFFFF] btn text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300 w-full">
                  Visit Now
                  <MdArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
