import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 min-h-screen flex flex-col">
        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
