"use client";

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGit,
  SiStorybook,
  SiTestinglibrary,
} from "react-icons/si";
import { FaDatabase, FaRobot } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Redux Toolkit", icon: <SiRedux /> },
  { name: "Rest APIs", icon: <FaDatabase /> },
  { name: "React Testing Library", icon: <SiTestinglibrary /> },
  { name: "Storybook", icon: <SiStorybook /> },
  { name: "Git & GitHub", icon: <SiGit /> },
  // { name: "AI", icon: <FaRobot /> },
];

const Skills = () => {
  return (
    <div id="skills" className="w-10/12 max-w-[1200px] mx-auto mt-20">
      <div className="flex flex-col gap-4 w-[90%] lg:w-[70%] mx-auto justify-center items-center">
        <h1 className="md:text-4xl text-3xl  font-bold">Technical Skills</h1>
      
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl   text-white shadow-lg hover:scale-105 transform transition duration-300"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
