import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiFastapi,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiCanva,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";


const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: 98 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 95 },
      { name: "JavaScript", icon: <FaJs />, level: 92 },
      { name: "React.js", icon: <FaReact />, level: 95 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 96 },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 90 },
      { name: "Express.js", icon: <SiExpress />, level: 88 },
      { name: "FastAPI", icon: <SiFastapi />, level: 90 },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "C", level: 85 },
      { name: "C++", icon: "C++", level: 88 },
      { name: "Python", icon: <FaPython />, level: 92 },
      { name: "JavaScript", icon: <FaJs />, level: 92 },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 84 },
      { name: "MySQL", icon: <SiMysql />, level: 86 },
    ],
  },

  {
    title: "Tools & Design",
    skills: [
      { name: "GitHub", icon: <FaGithub />, level: 92 },
      { name: "Git", icon: <FaGitAlt />, level: 88 },
      { name: "Postman", icon: <SiPostman />, level: 90 },
      { name: "VS Code", icon: <SiVisualstudiocode />, level: 96 },
      { name: "Canva", icon: <SiCanva />, level: 85 },
      { name: "Figma", icon: <FaFigma />, level: 80 },
    ],
  },
];