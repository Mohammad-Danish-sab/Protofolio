import { useState } from "react";
import { ChevronDown, LogOut, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 transition"
      >
        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
          {user?.full_name?.charAt(0)?.toUpperCase() || "A"}
        </div>

        <div className="text-left hidden md:block">
          <h3 className="text-white text-sm font-semibold">
            {user?.full_name || "Administrator"}
          </h3>

          <p className="text-slate-400 text-xs">
            {user?.email || "admin@example.com"}
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`text-slate-400 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-60 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
          <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-slate-800 text-slate-300">
            <User size={18} />
            Profile
          </button>

          <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-slate-800 text-slate-300">
            <Settings size={18} />
            Settings
          </button>

          <hr className="border-slate-700" />

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-600 text-red-400 hover:text-white transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
