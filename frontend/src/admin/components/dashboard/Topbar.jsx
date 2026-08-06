import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 h-20 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-8">
      {/* Search */}
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="relative text-slate-300 hover:text-white transition">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <UserCircle size={38} className="text-cyan-400" />

          <div>
            <p className="text-white font-semibold">Admin</p>

            <p className="text-xs text-slate-400">Portfolio Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}
