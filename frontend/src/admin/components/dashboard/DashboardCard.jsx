import { motion } from "framer-motion";

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  color = "from-cyan-500 to-blue-600",
  change,
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur-lg shadow-xl p-6"
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-white">{value}</h2>

          {change && (
            <span className="mt-3 inline-block rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
              {change}
            </span>
          )}
        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color}`}
        >
          {Icon && <Icon size={30} className="text-white" />}
        </div>
      </div>
    </motion.div>
  );
}
