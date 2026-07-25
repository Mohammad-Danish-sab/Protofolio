import { useState } from "react";
import { Menu, Bell, Search, User, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ setSidebarOpen, title = "Dashboard" }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      className="
      sticky
      top-0
      z-40
      h-20
      bg-slate-950/80
      backdrop-blur-xl
      border-b
      border-white/10
      flex
      items-center
      justify-between
      px-8
      "
    >
      {/* Left */}

      <div className="flex items-center gap-5">
        {/* Mobile Menu */}

        <button
          onClick={() => setSidebarOpen(true)}
          className="
          lg:hidden
          w-11
          h-11
          rounded-xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          "
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>

          <p className="text-sm text-zinc-400">{today}</p>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        {/* Search */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-3
          bg-white/5
          border
          border-white/10
          rounded-2xl
          px-4
          py-3
          w-80
          "
        >
          <Search size={18} className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search..."
            className="
            bg-transparent
            outline-none
            text-white
            w-full
            placeholder:text-zinc-500
            "
          />
        </div>

        {/* Notification */}

        <button
          className="
          relative
          w-12
          h-12
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          hover:bg-cyan-500
          transition
          "
        >
          <Bell size={20} />

          <span
            className="
            absolute
            top-2
            right-2
            w-2.5
            h-2.5
            rounded-full
            bg-red-500
            "
          />
        </button>

        {/* Profile */}

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="
            flex
            items-center
            gap-3
            px-4
            py-2
            rounded-2xl
            bg-white/5
            border
            border-white/10
            hover:bg-white/10
            transition
            "
          >
            <div
              className="
              w-11
              h-11
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-teal-500
              flex
              items-center
              justify-center
              "
            >
              <User />
            </div>

            <div className="hidden md:block text-left">
              <h3 className="font-semibold text-white">Admin</h3>

              <p className="text-xs text-zinc-400">Portfolio Manager</p>
            </div>
          </button>

          {/* Dropdown */}

          {showProfile && (
            <div
              className="
              absolute
              right-0
              mt-3
              w-56
              rounded-3xl
              bg-slate-900
              border
              border-white/10
              overflow-hidden
              shadow-2xl
              "
            >
              <button
                onClick={handleLogout}
                className="
                w-full
                flex
                items-center
                gap-3
                px-6
                py-4
                hover:bg-red-500
                hover:text-white
                transition
                "
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
