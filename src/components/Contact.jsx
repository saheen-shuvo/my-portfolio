import React from "react";
import linkedInIcon from "../assets/images/linkedIn icon.png";
import gitHubIcon from "../assets/images/gitHub icon1.png";
import facebookIcon from "../assets/images/fb icon.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#111111] px-4 py-12 max-w-screen-xl mx-auto"
    >
      <h2 className="text-lg md:text-4xl font-bold text-center text-white mb-6">
        Contact Me
      </h2>

      <div className="max-w-screen-md mx-auto text-center text-white">
        <p className="text-lg mb-4">
          Feel free to reach out for any questions or collaborations.
        </p>

        {/* Email Address */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Email:</h3>
          <p className="text-lg">
            <a
              href="mailto:your-email@example.com"
              className="text-blue-500 hover:underline"
            >
              saheenshuvo182@gmail.com
            </a>
          </p>
        </div>

        {/* Phone Number (optional) */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">What's App:</h3>
          <p className="text-lg">
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              +8801751967704
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <h3 className="text-xl font-semibold">Get in Touch:</h3>
        <div className="flex justify-center items-center gap-1 mt-1 md:mb-5">
          {/* Facebook */}
          <a href="https://www.facebook.com/share/1BYWbr36dS/?mibextid=wwXIfr">
            {" "}
            <button>
              <img className="w-[26px] md:w-[50px]" src={facebookIcon} alt="" />
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

        {/* Optional: Contact Form */}
        <div>
          <h3 className="text-xl font-semibold">Send a Message:</h3>
          <form
            action="mailto:saheenshuvo182@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <textarea
              name="message"
              rows="4"
              className="w-full p-2 my-4 text-gray-300 border-2 border-gray-500 rounded-lg"
              placeholder="Write your message here"
            ></textarea>
            <button
              type="submit"
              className="bg-[#FFFFFF] btn text-[#0D0D0D] hover:bg-[#E6E6E6] font-semibold px-4 py-2 rounded-lg transition duration-300 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
