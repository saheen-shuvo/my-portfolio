import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="bg-[#111111] px-4 pt-4 md:pt-12 max-w-screen-xl mx-auto">
      <h1 className="text-lg md:text-3xl font-bold text-center my-3 md:my-6">My Skills</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="mongodb logo"
          className="w-5  md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="javascript logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="nodejs logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          alt="bootstrap logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          alt="firebase logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt="figma logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="html5 logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
          alt="bash logo"
          className="w-5  md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="css3 logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="git logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
          alt="tailwindcss logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
        <img
          src="https://skillicons.dev/icons?i=vite"
          alt="vite logo"
          className="w-5 md:w-12 m-2 md:m-3"
        />
      </div>
    </div>
  );
};

export default Skills;
