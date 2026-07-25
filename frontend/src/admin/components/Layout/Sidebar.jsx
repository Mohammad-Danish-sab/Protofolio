import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Newspaper,
  User,
  Mail,
  Settings,
  LogOut,
  Briefcase,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Projects",
    icon: FolderKanban,
    path: "/admin/projects",
  },
  {
    name: "Blogs",
    icon: Newspaper,
    path: "/admin/blogs",
  },
  {
    name: "About",
    icon: User,
    path: "/admin/about",
  },
  {
    name: "Contact",
    icon: Mail,
    path: "/admin/contact",
  },
  {
    name: "Experience",
    icon: Briefcase,
    path: "/admin/experience",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">Portfolio CMS</h1>

          <p className="text-xs text-slate-400 text-center">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span className="font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* User */}
      <div className="border-t border-slate-800 p-5">
        <div className="flex items-center gap-3 mb-5">
          <img
            src="https://ui-avatars.com/api/?name=Admin"
            alt="Admin"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="text-white font-semibold">Admin</h3>

            <p className="text-xs text-slate-400">Portfolio Owner</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-500 hover:bg-red-600 transition-all py-3 font-semibold text-white">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
