import {
  Eye,
  Users,
  MousePointerClick,
  TrendingUp,
  Github,
  Download,
} from "lucide-react";

const stats = [
  {
    title: "Profile Views",
    value: "15,240",
    icon: Eye,
    color: "text-cyan-400 bg-cyan-500/10",
  },
  {
    title: "Visitors",
    value: "8,965",
    icon: Users,
    color: "text-emerald-400 bg-emerald-500/10",
  },
  {
    title: "Project Clicks",
    value: "3,421",
    icon: MousePointerClick,
    color: "text-orange-400 bg-orange-500/10",
  },
  {
    title: "Growth",
    value: "+18%",
    icon: TrendingUp,
    color: "text-pink-400 bg-pink-500/10",
  },
  {
    title: "GitHub Stars",
    value: "320",
    icon: Github,
    color: "text-violet-400 bg-violet-500/10",
  },
  {
    title: "Resume Downloads",
    value: "1,254",
    icon: Download,
    color: "text-blue-400 bg-blue-500/10",
  },
];

export default function StatsGrid() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-6">
        Statistics Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">{item.title}</p>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
