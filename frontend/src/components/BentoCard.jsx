import { motion } from "framer-motion";

export default function BentoCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
      }}
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
