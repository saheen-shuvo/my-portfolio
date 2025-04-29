import React from "react";
import { FaGithub, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null.");
      return;
    }

    const formData = new FormData(form.current);
    console.log("Form Data:", Object.fromEntries(formData));

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          Swal.fire("Success!", "Email Sent successfully", "success");
        },
        (error) => {
          Swal.fire(
            "Failed!",
            `Could not send email: ${error.text}`,
            "warning"
          );
        }
      );
  };
  return (
    <div
      className=" bg-[#111111] px-2 lg:px-4 py-12 max-w-screen-xl mx-auto"
      id="contact"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-lg md:text-4xl font-bold text-center text-white mb-2 md:mb-4"
      >
        Contact Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-sm text-gray-400 mb-4 text-center"
      >
        Feel free to reach out for any questions or collaborations.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        id="intro-container"
        className="border-2 border-yellow-400 mt-8 flex flex-col lg:flex-row px-4 lg:px-8 py-8 rounded-xl lg:rounded-3xl"
      >
        {/* Left */}
        <div className="flex-1">
          <h1 className="pl-4 text-lg md:text-2xl font-bold pb-4">
            Contact Information
          </h1>
          <div className="pl-4 flex flex-col gap-3 text-lg">
            <p className="flex items-center gap-2">
              <FaLocationDot /> Sector 12, Uttara, Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> saheenshuvo182@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaGithub /> saheen-shuvo
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +8801751967704
            </p>
            <p className="flex items-center gap-2">
              <IoLogoWhatsapp /> +8801751967704
            </p>
          </div>
        </div>
        {/*Right */}
        <div className="flex-1">
          <h1 className="pl-4 text-lg md:text-2xl font-bold pb-4 mt-8 lg:mt-0">
            Send Me a Message
          </h1>
          <div>
            <div className="">
              <form ref={form} onSubmit={sendEmail} className="w-full px-4">
                <label className="block text-gray-300 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />

                <label className="block text-gray-300 font-medium mt-3 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                ></textarea>

                <input
                  type="submit"
                  value="Send"
                  id="intro-btn"
                  className="btn px-12 w-full text-white py-2 mt-4 rounded-lg"
                />
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
