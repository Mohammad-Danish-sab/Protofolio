import { useEffect, useState } from "react";
import { FolderKanban, Newspaper, Brain, Mail } from "lucide-react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";

import DashboardCard from "../../components/dashboard/DashboardCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import RecentProjects from "../../components/dashboard/RecentProjects";
import RecentBlogs from "../../components/dashboard/RecentBlogs";
import RecentContacts from "../../components/dashboard/RecentContacts";
import QuickActions from "../../components/dashboard/QuickActions";

import { getDashboardStats } from "../../services/dashboardService";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [dashboard, setDashboard] = useState({
    stats: {
      projects: 0,
      blogs: 0,
      skills: 0,
      contacts: 0,
    },
    recent_projects: [],
    recent_blogs: [],
    recent_contacts: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    try {
      const data = await getDashboardStats();

      setDashboard(data);
    } catch (error) {
      toast.error("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <AdminLayout title="Dashboard">
        <div className="text-center py-20">Loading Dashboard...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        {/* Header */}

        <div>
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

          <p className="text-slate-400 mt-2">
            Manage your Portfolio from one place.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <DashboardCard
            title="Projects"
            value={dashboard.stats.projects}
            icon={FolderKanban}
            color="#06b6d4"
          />

          <DashboardCard
            title="Blogs"
            value={dashboard.stats.blogs}
            icon={Newspaper}
            color="#8b5cf6"
          />

          <DashboardCard
            title="Skills"
            value={dashboard.stats.skills}
            icon={Brain}
            color="#10b981"
          />

          <DashboardCard
            title="Contacts"
            value={dashboard.stats.contacts}
            icon={Mail}
            color="#f97316"
          />
        </div>

        {/* Analytics */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <AnalyticsChart />
          </div>

          <QuickActions />
        </div>

        {/* Bottom */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <RecentProjects projects={dashboard.recent_projects} />

          <RecentBlogs blogs={dashboard.recent_blogs} />

          <RecentContacts contacts={dashboard.recent_contacts} />
        </div>
      </div>
    </AdminLayout>
  );
}
