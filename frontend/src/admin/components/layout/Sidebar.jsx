import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Newspaper,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  UserCircle,
  Mail,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function Sidebar({ collapsed, setCollapsed }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menus = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      title: "Projects",
      icon: FolderKanban,
      path: "/admin/projects",
    },
    {
      title: "Blogs",
      icon: Newspaper,
      path: "/admin/blogs",
    },
    {
      title: "Skills",
      icon: Code2,
      path: "/admin/skills",
    },
    {
      title: "Services",
      icon: BriefcaseBusiness,
      path: "/admin/services",
    },
    {
      title: "Experience",
      icon: BriefcaseBusiness,
      path: "/admin/experience",
    },
    {
      title: "Education",
      icon: GraduationCap,
      path: "/admin/education",
    },
    {
      title: "Certificates",
      icon: Award,
      path: "/admin/certificates",
    },
    {
      title: "About",
      icon: UserCircle,
      path: "/admin/about",
    },
    {
      title: "Contacts",
      icon: Mail,
      path: "/admin/contacts",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <aside
      className={`h-screen sticky top-0 transition-all duration-300
      bg-slate-950/90 backdrop-blur-xl
      border-r border-white/10
      ${collapsed ? "w-24" : "w-72"}`}
    >
      {/* Logo */}

      <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
        {!collapsed && (
          <div>
            <h1 className="text-2xl font-black text-white">Portfolio</h1>

            <p className="text-xs text-cyan-400">Admin Panel</p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10
          flex items-center justify-center
          hover:bg-cyan-500 hover:text-white transition-all"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu */}

      <div className="px-4 py-6 flex flex-col gap-2">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center
                ${collapsed ? "justify-center" : "justify-start"}
                gap-4
                px-4
                py-3
                rounded-2xl
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }
                `
              }
            >
              <Icon size={22} />

              {!collapsed && <span className="font-medium">{item.title}</span>}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom */}

      <div className="absolute bottom-6 left-4 right-4">
        <button
          onClick={handleLogout}
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          py-3
          rounded-2xl
          bg-red-500/10
          border
          border-red-500/20
          text-red-400
          hover:bg-red-500
          hover:text-white
          transition-all
          "
        >
          <LogOut size={20} />

          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
}
