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
  FaExternalLinkAlt,
  FaEnvelope,
} from "react-icons/fa";

import { SiMongodb, SiMysql, SiFastapi, SiTailwindcss } from "react-icons/si";

import { TypeAnimation } from "react-type-animation";

function BentoCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className={`
      rounded-4xl
      border border-white/10
      bg-white/3
      backdrop-blur-2xl
      overflow-hidden
      relative
      group
      hover:border-cyan-400/20
      hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
      transition-all duration-500
      ${className}
      `}
    >
      <div
        className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition-all duration-500
        bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_40%)]
        "
      />

      {children}
    </motion.div>
  );
}

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

          <BentoCard className="p-7 min-h-92 flex flex-col justify-between">
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
                  hover:scale-105
                  duration-500
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
          </BentoCard>


          <BentoCard className="h-45 flex flex-col items-center justify-center">
            <FaGithub className="text-6xl" />

            <p className="mt-5 text-zinc-400">Open Source Projects</p>
          </BentoCard>

          <BentoCard className="h-45 flex flex-col items-center justify-center">
            <FaCode className="text-6xl text-cyan-400" />

            <p className="mt-5 text-zinc-400">Clean Modern UI</p>
          </BentoCard>


          <BentoCard className="xl:col-span-2 p-8 md:p-10 min-h-92 overflow-hidden">
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
                shadow-[0_0_40px_rgba(34,211,238,0.35)]
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
          </BentoCard>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #22d3ee, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .social-btn {
          width: 48px;
          height: 48px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
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
