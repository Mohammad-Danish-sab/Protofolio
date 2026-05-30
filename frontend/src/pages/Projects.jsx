import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import insuranceImg from "../assets/Images/insurance.png";
import ecommerceImg from "../assets/Images/ecommerce.png";
import issTrackerImg from "../assets/Images/isstracker.png";
import kidsPortalImg from "../assets/Images/kidsportal.png";
const projects = [
  {
    title: "Insurance AI Platform",
    image: insuranceImg,
    description:
      "AI-powered insurance premium prediction platform with analytics dashboard and machine learning integration.",
    tech: ["React", "FastAPI", "MongoDB"],
    features: [
      "Premium Prediction",
      "Analytics Dashboard",
      "Authentication",
      "Responsive Design",
    ],
    github: "https://github.com/your-github",
    live: "#",
  },

  {
    title: "Premium E-Commerce",
    image: ecommerceImg,
    description:
      "Modern e-commerce application with premium UI, cart system, authentication and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Shopping Cart",
      "Admin Dashboard",
      "Authentication",
      "Responsive Design",
    ],
    github: "https://github.com/your-github",
    live: "#",
  },


  {
    title: "ISS Tracker Project",
    image: issTrackerImg,
    description:
      "Track the International Space Station in real time using React, FastAPI and live location APIs.",
    tech: ["React", "FastAPI", "Tailwind"],
    features: [
      "Real-Time Tracking",
      "Interactive Map",
      "API Integration",
      "Live Updates",
    ],
    github: "https://github.com/your-github",
    live: "#",
  },

  {
    title: "Kids Portal",
    image: kidsPortalImg,
    description:
      "Interactive learning platform for children with engaging educational content and modern UI.",
    tech: ["React", "FastAPI", "Tailwind"],
    features: [
      "Learning Dashboard",
      "Student Profiles",
      "Interactive Content",
      "Responsive Design",
    ],
    github: "https://github.com/your-github",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#070707] text-white pt-36 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-cyan-400 tracking-[5px] uppercase text-sm">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-5">
            Featured Projects
          </h1>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Modern Full Stack Applications, AI Systems and Scalable Backend
            Solutions.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="
                grid lg:grid-cols-2
                gap-8
                rounded-[35px]
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                overflow-hidden
              "
            >
              <div className="h-112 bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                      max-w-full
                      max-h-full
                      object-contain
                      transition-all
                      duration-500
                      hover:scale-105
                    "
                />
              </div>

              <div className="p-8 lg:p-10">
                <h2 className="text-4xl font-black">{project.title}</h2>

                <p className="text-zinc-400 leading-8 mt-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {(project.tech || []).map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-2
                        rounded-full
                        bg-cyan-500/10
                        border border-cyan-400/20
                        text-cyan-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold mb-5">Features</h3>

                  <ul className="space-y-3">
                    {(project.features || []).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-zinc-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-6 py-4
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      flex items-center gap-3
                      hover:bg-white/10
                      transition-all
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-6 py-4
                      rounded-2xl
                      bg-linear-to-r
                      from-cyan-500
                      to-teal-500
                      flex items-center gap-3
                      font-semibold
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
