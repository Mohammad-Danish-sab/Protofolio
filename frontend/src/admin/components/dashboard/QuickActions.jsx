import { Link } from "react-router-dom";
import {
  Plus,
  FolderKanban,
  Newspaper,
  Mail,
  UserCog,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Add Project",
    description: "Create a new portfolio project",
    icon: FolderKanban,
    link: "/admin/projects/new",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Write Blog",
    description: "Publish a new blog article",
    icon: Newspaper,
    link: "/admin/blogs/new",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Messages",
    description: "View contact requests",
    icon: Mail,
    link: "/admin/contact",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Manage Users",
    description: "User management panel",
    icon: UserCog,
    link: "/admin/users",
    color: "from-pink-500 to-rose-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Quick Actions</h2>

        <div className="h-10 w-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
          <Plus className="text-cyan-400" size={20} />
        </div>
      </div>

      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.link}
              className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-300 p-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <div>
                  <h3 className="text-white font-medium">{action.title}</h3>

                  <p className="text-sm text-slate-400">{action.description}</p>
                </div>
              </div>

              <ArrowRight
                size={20}
                className="text-slate-500 group-hover:text-cyan-400 transition-colors"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
