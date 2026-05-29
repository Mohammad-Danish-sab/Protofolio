import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import profileImg from "../assets/Images/img1.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaPython,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

import { SiMongodb, SiMysql, SiFastapi, SiTailwindcss } from "react-icons/si";

import { TypeAnimation } from "react-type-animation";

import { projects, skills, services } from "../utils/data";

export default function Home() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Insurance AI Platform",
      desc: "AI-powered insurance premium prediction platform using machine learning and analytics.",
      tech: ["React", "FastAPI", "MongoDB"],
    },

    {
      title: "Premium E-Commerce",
      desc: "Modern ecommerce application with futuristic UI and scalable backend architecture.",
      tech: ["React", "Node.js", "MongoDB"],
    },

    {
      title: "Patient Doctor API",
      desc: "Using Python(FastAPI) to make the Patient Docotr API",
      tech: ["FastAPI"],
    },

    {
      title: "ISS-TRACKER-PROJECT",
      desc: "It is a full-stack application that tracks the real-time location of the International Space Station (ISS). It uses FastAPI for the backend to fetch ISS data from a public API and React.js for the frontend to display the position on an interactive map with live updates and basic space-tracking information. ",
      tech: ["React", "Tailwind", "FastAPI", "Framer Motion"],
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      value: "95%",
    },

    {
      name: "Backend Development",
      value: "88%",
    },

    {
      name: "React",
      value: "96%",
    },

    {
      name: "AI + FastAPI",
      value: "84%",
    },
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "AI",
  ];

  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      bg-[#070707]
      text-white
      overflow-hidden
      "
    >

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(
              650px at ${position.x}px ${position.y}px,
              rgba(34,211,238,0.10),
              transparent 80%
            )
          `,
        }}
      />


      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-size-[65px_65px]" />

      <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-teal-500/10 blur-[150px] rounded-full" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <motion.div
            whileHover={{ y: -6 }}
            className="
            rounded-4xl
            border border-white/10
            bg-white/3
            backdrop-blur-2xl
            p-7
            flex flex-col justify-between
            "
          >
            <div>
              <p className="text-zinc-400 text-sm tracking-wide">
                Full Stack Developer
              </p>

              <div className="relative mx-auto w-fit mt-7">
                <div
                  className="
                  absolute inset-0
                  rounded-full
                  bg-linear-to-r
                  from-cyan-400
                  to-teal-500
                  blur-3xl
                  opacity-40
                  animate-pulse
                  "
                />

                <img
                  src={profileImg}
                  alt="Mohammad Danish"
                  className="
                  relative
                  w-40 h-40
                  rounded-full
                  object-cover
                  border-[5px]
                  border-cyan-400
                  shadow-[0_0_60px_rgba(34,211,238,0.35)]
                  "
                />
              </div>

              <h2 className="text-4xl font-black leading-tight mt-8">
                Mohammad
                <br />
                Danish
              </h2>

              <p className="text-zinc-400 leading-7 text-sm mt-5">
                Passionate about building premium web experiences, scalable
                backend systems and AI-powered applications.
              </p>
            </div>

            <div className="flex justify-between items-end mt-8">
              <div className="flex gap-3">
                <a
                  href="https://github.com/Mohammad-Danish-sab"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/mohammad-danish14"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <FaLinkedin />
                </a>

                <a href="mailto:danish@example.com" className="social-btn">
                  <FaEnvelope />
                </a>
              </div>

              <button
                className="
                w-12 h-12
                rounded-full
                bg-white
                text-black
                flex items-center justify-center
                hover:scale-110
                transition-all duration-300
                "
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="
            rounded-4xl
            border border-white/10
            bg-white/3
            backdrop-blur-2xl
            h-52
            flex flex-col items-center justify-center
            "
          >
            <FaGithub className="text-6xl" />

            <p className="mt-5 text-zinc-400">Open Source Projects</p>
          </motion.div>


          <motion.div
            whileHover={{ y: -6 }}
            className="
            rounded-4xl
            border border-white/10
            bg-white/3
            backdrop-blur-2xl
            h-52
            flex flex-col items-center justify-center
            "
          >
            <FaCode className="text-6xl text-cyan-400" />

            <p className="mt-5 text-zinc-400">Clean Modern UI</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="
            xl:col-span-2
            rounded-4xl
            border border-white/10
            bg-white/3
            backdrop-blur-2xl
            p-8 md:p-10
            overflow-hidden
            relative
            "
          >
            <div className="absolute right-8 top-8 hidden xl:flex flex-col gap-4">
              <div className="floating-tech">
                <FaReact className="text-cyan-400" />
              </div>

              <div className="floating-tech">
                <FaNodeJs className="text-green-400" />
              </div>

              <div className="floating-tech">
                <FaPython className="text-yellow-400" />
              </div>
            </div>

            <div
              className="
              inline-flex
              items-center
              gap-3
              px-5 py-3
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/10
              "
            >
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>

              <span className="text-cyan-300 text-sm">
                Available for freelance & internships
              </span>
            </div>

            <h1
              className="
              mt-8
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-black
              leading-[0.95]
              tracking-[-3px]
              "
            >
              Building
              <br />
              <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    "Modern Web.",
                    2000,
                    "AI Systems.",
                    2000,
                    "Future Skills.",
                    2000,
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-zinc-400 leading-8 max-w-2xl mt-8 text-lg">
              Skilled in React.js, FastAPI, Node.js, MongoDB and modern UI/UX
              systems focused on scalable applications.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button
                className="
                group
                px-8 py-4
                rounded-2xl
                bg-linear-to-r
                from-cyan-500
                to-teal-500
                font-semibold
                hover:scale-105
                transition-all duration-300
                "
              >
                <span className="flex items-center gap-3">
                  View Projects
                  <FaArrowRight className="group-hover:translate-x-1 duration-300" />
                </span>
              </button>

              <button
                className="
                px-8 py-4
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:border-cyan-400/30
                hover:bg-cyan-500/10
                transition-all duration-300
                "
              >
                <span className="flex items-center gap-3">
                  <FaDownload />
                  Download Resume
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        id="projects"
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-10"
      >
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            Featured Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="
              rounded-4xl
              border border-white/10
              bg-white/3
              overflow-hidden
              "
            >
              <div
                className="
                h-64
                bg-linear-to-br
                from-cyan-500/20
                to-teal-500/10
                "
              />

              <div className="p-8">
                <h3 className="text-3xl font-black">{project.title}</h3>

                <p className="text-zinc-400 leading-8 mt-5">{project.desc}</p>

                <div className="flex flex-wrap gap-3 mt-7">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                      px-4 py-2
                      rounded-full
                      text-sm
                      bg-white/5
                      border border-white/10
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        id="skills"
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-20"
      >
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="
              rounded-4xl
              border border-white/10
              bg-white/3
              p-8
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{skill.name}</h3>

                <span className="text-cyan-400 font-semibold">
                  {skill.value}
                </span>
              </div>

              <div className="h-3 rounded-full bg-white/5 mt-6 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.value }}
                  transition={{ duration: 1 }}
                  className="
                  h-full
                  rounded-full
                  bg-linear-to-r
                  from-cyan-500
                  to-teal-500
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        id="services"
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24"
      >
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">What I Offer</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="
              rounded-4xl
              border border-white/10
              bg-white/3
              p-8
              text-center
              "
            >
              <div
                className="
                w-24 h-24
                rounded-[28px]
                bg-linear-to-br
                from-cyan-500
                to-teal-500
                mx-auto
                flex items-center justify-center
                text-4xl
                "
              >
                ⚡
              </div>

              <h3 className="text-3xl font-black mt-8">{service}</h3>

              <p className="text-zinc-400 leading-8 mt-5">
                Creating scalable futuristic digital experiences with modern
                development technologies.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        id="contact"
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-24"
      >
        <div
          className="
          rounded-[40px]
          border border-white/10
          bg-white/3
          p-10 md:p-16
          text-center
          "
        >
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            Let’s Build Something Amazing
          </h2>

          <p className="text-zinc-400 leading-8 max-w-2xl mx-auto mt-8 text-lg">
            Open for internships, freelance work and exciting collaborations in
            AI systems and full-stack development.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <button
              className="
              px-8 py-4
              rounded-2xl
              bg-linear-to-r
              from-cyan-500
              to-teal-500
              font-semibold
              "
            >
              Hire Me
            </button>

            <button
              className="
              px-8 py-4
              rounded-2xl
              border border-white/10
              bg-white/5
              "
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>

      <footer className="relative z-10 pt-24 pb-10 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-px bg-white/10 mb-10" />

          <h3 className="text-3xl font-black gradient-text">CodeWith Danish</h3>

          <p className="text-zinc-500 mt-5">© 2026 All Rights Reserved.</p>
        </div>
      </footer>

      {/* CSS */}

      <style>{`
        .gradient-text {
          background: linear-gradient(to right, #22d3ee, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .social-btn {
          width: 48px;
          height: 48px;
          border-radius: 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        .social-btn:hover {
          background: #22d3ee;
          color: black;
          transform: translateY(-4px);
        }

        .floating-tech {
          width: 65px;
          height: 65px;
          border-radius: 24px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
