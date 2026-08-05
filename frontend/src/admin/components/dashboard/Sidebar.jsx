import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  User,
  FolderKanban,
  Code2,
  Briefcase,
  GraduationCap,
  Clock3,
  MessageSquareQuote,
  FileText,
  Mail,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { name: "Hero", icon: Home, path: "/admin/hero" },
  { name: "About", icon: User, path: "/admin/about" },
  { name: "Projects", icon: FolderKanban, path: "/admin/projects" },
  { name: "Skills", icon: Code2, path: "/admin/skills" },
  { name: "Services", icon: Briefcase, path: "/admin/services" },
  { name: "Experience", icon: Clock3, path: "/admin/experience" },
  { name: "Education", icon: GraduationCap, path: "/admin/education" },
  {
    name: "Testimonials",
    icon: MessageSquareQuote,
    path: "/admin/testimonials",
  },
  { name: "Blogs", icon: FileText, path: "/admin/blogs" },
  { name: "Contact", icon: Mail, path: "/admin/contact" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-950 border-r border-slate-800">
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">Portfolio Admin</h1>
      </div>

      <nav className="mt-6 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <button className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-xl transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
