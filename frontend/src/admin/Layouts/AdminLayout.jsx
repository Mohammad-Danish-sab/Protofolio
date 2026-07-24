import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminLayout({ children, title = "Dashboard" }) {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      {/* Desktop Sidebar */}

      <div className="hidden lg:block fixed left-0 top-0 z-50">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Mobile Sidebar */}

      <div
        className={`
          fixed
          top-0
          left-0
          z-50
          transition-transform
          duration-300
          lg:hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar collapsed={false} setCollapsed={() => {}} />
      </div>

      {/* Main Content */}

      <div
        className={`
        transition-all
        duration-300
        ${collapsed ? "lg:ml-24" : "lg:ml-72"}
        `}
      >
        <Navbar title={title} setSidebarOpen={setSidebarOpen} />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
