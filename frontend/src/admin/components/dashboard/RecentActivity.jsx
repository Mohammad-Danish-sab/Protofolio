import { FolderKanban, Newspaper, Mail, UserPlus, Brain } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "New project added",
    description: "Portfolio Website",
    time: "5 minutes ago",
    icon: FolderKanban,
    color: "bg-cyan-500/20 text-cyan-400",
  },
  {
    id: 2,
    title: "New blog published",
    description: "React Best Practices",
    time: "30 minutes ago",
    icon: Newspaper,
    color: "bg-violet-500/20 text-violet-400",
  },
  {
    id: 3,
    title: "New contact message",
    description: "John Doe sent a message",
    time: "1 hour ago",
    icon: Mail,
    color: "bg-emerald-500/20 text-emerald-400",
  },
  {
    id: 4,
    title: "New user registered",
    description: "Mohammad Danish",
    time: "3 hours ago",
    icon: UserPlus,
    color: "bg-orange-500/20 text-orange-400",
  },
  {
    id: 5,
    title: "AI prediction completed",
    description: "Insurance Premium Prediction",
    time: "Yesterday",
    icon: Brain,
    color: "bg-pink-500/20 text-pink-400",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.id} className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${activity.color}`}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-medium">{activity.title}</h3>

                <p className="text-slate-400 text-sm">{activity.description}</p>

                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
