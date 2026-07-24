import { motion } from "framer-motion";

export default function DashboardCard({ title, value, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
      bg-slate-900/70
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      shadow-xl
      "
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400">{title}</p>

          <h2 className="text-4xl font-bold mt-3 text-white">{value}</h2>
        </div>

        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: color,
          }}
        >
          <Icon className="text-white" size={30} />
        </div>
      </div>
    </motion.div>
  );
}
