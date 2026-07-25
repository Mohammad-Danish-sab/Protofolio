import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const SIDEBAR_WIDTH = "lg:ml-72";
const SIDEBAR_COLLAPSED_WIDTH = "lg:ml-24";

export default function AdminLayout({ children, title = "Dashboard" }) {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          aria-hidden="true"
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Desktop Sidebar */}

      <aside className="hidden lg:block fixed left-0 top-0 h-screen z-50">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </aside>

      {/* Mobile Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          z-50
          transition-transform
          duration-300
          lg:hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar
          collapsed={false}
          setCollapsed={() => {}}
          closeSidebar={closeSidebar}
        />
      </aside>

      {/* Main Area */}

      <div
        className={`
          min-h-screen
          transition-all
          duration-300
          ${collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}
        `}
      >
        <Navbar title={title} setSidebarOpen={setSidebarOpen} />

        {/* Navbar Height = 80px */}

        <main className="pt-24 px-6 pb-8 md:px-8">{children}</main>
      </div>
    </div>
  );
}
