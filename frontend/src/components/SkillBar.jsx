import { motion } from "framer-motion";

export default function SkillBar({ name, value }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
      rounded-4xl
      border border-white/10
      bg-white/3
      p-8
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{name}</h3>

        <span className="text-cyan-400 font-semibold">{value}</span>
      </div>

      <div className="h-3 rounded-full bg-white/5 mt-6 overflow-hidden">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: value,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
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
  );
}
