import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, desc, tech = [], github, live }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      rounded-4xl
      border border-white/10
      bg-white/3
      overflow-hidden
      relative
      group
      hover:border-cyan-400/20
      transition-all duration-500
      "
    >
      <div
        className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        duration-500
        bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_45%)]
        "
      />

      <div
        className="
        h-64
        bg-linear-to-br
        from-cyan-500/20
        to-teal-500/10
        border-b border-white/10
        "
      />

      <div className="p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-black tracking-[-1px]">{title}</h3>

          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                rounded-2xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                hover:bg-cyan-400
                hover:text-black
                transition-all duration-300
                "
              >
                <FaGithub />
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                rounded-2xl
                bg-cyan-500/10
                border border-cyan-400/20
                flex items-center justify-center
                hover:bg-cyan-400
                hover:text-black
                transition-all duration-300
                "
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        <p className="text-zinc-400 leading-8 mt-5">{desc}</p>

        <div className="flex flex-wrap gap-3 mt-7">
          {tech.map((item, idx) => (
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
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
