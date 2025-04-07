import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Bash",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
  ];

  return (
    <div
      id="skills"
      className="bg-[#111111] px-2 md:px-4 pt-2 md:pt-12 max-w-screen-xl mx-auto overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-lg md:text-3xl font-bold text-center my-3 md:my-6 text-white"
      >
        My Stacks & Technologies
      </motion.h1>

      <div className="relative w-full h-20 md:h-32 overflow-hidden">
        {/* LARGE SCREEN */}
        <div className="hidden lg:flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
              className="flex flex-col items-center"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-8 lg:w-[56px] object-contain"
              />
              <span className="text-xs md:text-sm text-white mt-1">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
        {/* SMALL SCREEN */}
        <motion.div
          className="absolute top-0 flex lg:hidden items-center gap-6 px-4"
          animate={{
            x: ["60%", "-100%"],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {skills.map((skill, index) => (
            <div key={`scroll-${index}`} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-8 md:w-12 h-8 md:h-12 object-contain"
              />
              <span className="text-xs md:text-sm text-white mt-1">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
