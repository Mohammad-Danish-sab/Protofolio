import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { FaGithub, FaLinkedin, FaCode, FaArrowRight } from "react-icons/fa";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-7xl
        "
      >
        <div
          className="
          backdrop-blur-2xl
          bg-white/5
          border border-white/10
          rounded-[28px]
          px-6 lg:px-8
          py-4
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 cursor-pointer">
              <div
                className="
                w-12 h-12
                rounded-2xl
                bg-linear-to-br
                from-cyan-400
                to-teal-500
                flex items-center justify-center
                text-black
                text-xl
                shadow-[0_0_30px_rgba(34,211,238,0.35)]
                "
              >
                <FaCode />
              </div>

              <div className="flex flex-col leading-none">
                <span
                  className="
                  text-xl
                  lg:text-2xl
                  font-black
                  tracking-[-1px]
                  bg-linear-to-r
                  from-cyan-300
                  to-teal-400
                  bg-clip-text
                  text-transparent
                  "
                >
                  CodeWith Danish
                </span>

                <span className="text-zinc-500 text-xs mt-1">
                  Full Stack Developer
                </span>
              </div>
            </Link>

            <ul className="hidden lg:flex items-center gap-10">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="
                    text-zinc-300
                    hover:text-cyan-400
                    transition-all duration-300
                    text-sm
                    uppercase
                    tracking-[2px]
                    font-medium
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              {/* SOCIAL */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="https://github.com/Mohammad-Danish-sab"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-social"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/mohammad-danish14"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-social"
                >
                  <FaLinkedin />
                </a>
              </div>

              <motion.button
                onClick={() => navigate("/Contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                    hidden md:flex
                    items-center
                    gap-3
                    px-6 py-3
                    rounded-2xl
                    font-semibold
                    bg-linear-to-r
                    from-cyan-500
                    to-teal-500
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                    transition-all duration-300
                    "
              >
                Hire Me
                <FaArrowRight />
              </motion.button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="
                lg:hidden
                w-11 h-11
                rounded-2xl
                border border-white/10
                bg-white/5
                flex items-center justify-center
                text-xl
                text-white
                "
              >
                {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="
            fixed
            top-28
            left-1/2
            -translate-x-1/2
            w-[92%]
            z-40
            lg:hidden
            "
          >
            <div
              className="
              backdrop-blur-2xl
              bg-[#0f172a]/90
              border border-white/10
              rounded-[30px]
              p-6
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >
              <ul className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="
                      block
                      text-zinc-300
                      hover:text-cyan-400
                      transition-all duration-300
                      uppercase
                      tracking-[2px]
                      text-sm
                      "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/contact");
                }}
                className="
                     mt-8
                     w-full
                     py-4
                     rounded-2xl
                     font-semibold
                     bg-linear-to-r
                     from-cyan-500
                     to-teal-500
                     hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                     transition-all duration-300
                     "
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-social {
          width: 44px;
          height: 44px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #d4d4d8;

          transition: all 0.3s ease;
        }

        .nav-social:hover {
          transform: translateY(-4px);
          border-color: rgba(34, 211, 238, 0.4);
          background: rgba(34, 211, 238, 0.1);
          color: #22d3ee;
        }
      `}</style>
    </>
  );
}
