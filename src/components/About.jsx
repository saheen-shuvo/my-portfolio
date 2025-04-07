import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#111111] px-2 md:px-4 pt-2 md:pt-12 max-w-screen-xl mx-auto"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-lg md:text-3xl font-bold text-center my-3 md:my-6 text-white"
      >
        About Me
      </motion.h1>
      <p className=" text-[10px] md:text-lg text-gray-400 text-justify leading-relaxed">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
        >
          {" "}
          My journey in web development began with a fascination for how digital
          experiences are built. Over time, that curiosity evolved into a
          passion for crafting modern, scalable, and user-friendly applications
          that seamlessly blend creativity with functionality.
        </motion.span>
        <br></br>
        <br></br>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
        >
          I specialize in React.js, Node.js, Express, and MongoDB, developing
          applications that are not only visually engaging but also highly
          efficient under the hood. From intuitive dashboards to full-stack web
          platforms, I enjoy transforming complex ideas into smooth, interactive
          experiences with clean and maintainable code.
        </motion.span>
        <br></br>
        <br></br>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {" "}
          Beyond development, I’m passionate about working for people and making
          a positive impact. I dedicate my free time to volunteering, where I
          contribute to meaningful projects and help others achieve their goals.
          My mission? To leverage my skills to empower businesses and
          individuals, turning their ideas into impactful digital solutions that
          grow and scale.
        </motion.span>
      </p>
    </div>
  );
};

export default About;
