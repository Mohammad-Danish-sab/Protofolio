import { motion } from "framer-motion";

export default function ServiceCard({ title }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      rounded-4xl
      border border-white/10
      bg-white/3
      p-8
      text-center
      group
      "
    >
      <div
        className="
        w-22 h-22
        rounded-[28px]
        bg-linear-to-br
        from-cyan-500
        to-teal-500
        mx-auto
        flex items-center justify-center
        text-4xl
        shadow-[0_0_40px_rgba(34,211,238,0.35)]
        "
      >
        ⚡
      </div>

      <h3 className="text-3xl font-black mt-8">{title}</h3>

      <p className="text-zinc-400 leading-8 mt-5">
        Creating scalable futuristic digital experiences with modern
        technologies.
      </p>

      <button
        className="
        mt-8
        px-6 py-3
        rounded-2xl
        bg-white/5
        border border-white/10
        hover:border-cyan-400/30
        hover:bg-cyan-500/10
        transition-all duration-300
        "
      >
        Learn More
      </button>
    </motion.div>
  );
}
