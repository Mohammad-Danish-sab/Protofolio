import { motion } from "framer-motion";
import profileImg from "../assets/Images/img1.jpeg";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDownload,
} from "react-icons/fa";

import {
  SiFastapi,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";


const achievements = [
  { number: "20+", title: "Projects" },
  { number: "10+", title: "Technologies" },
  { number: "2+", title: "Years Learning" },
  { number: "100%", title: "Dedication" },
];

const services = [
  "Modern UI/UX",
  "Full Stack Development",
  "REST API Development",
  "AI Powered Applications",
];

const techStack = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <FaPython />,
    name: "Python",
  },
  {
    icon: <SiFastapi />,
    name: "FastAPI",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
];
