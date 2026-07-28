import { FolderPlus, FileText, Code2, Briefcase, Mail } from "lucide-react";

import Card from "../common/Card";

const icons = {
  project: FolderPlus,
  blog: FileText,
  skill: Code2,
  service: Briefcase,
  contact: Mail,
};

export default function RecentActivity({ activities = [] }) {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

      {activities.length === 0 ? (
        <div className="py-16 text-center text-slate-500">
          No recent activity
        </div>
      ) : (
        <div className="space-y-5">
          {activities.map((activity) => {
            const Icon = icons[activity.type] || FolderPlus;

            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Icon className="text-cyan-400" size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold">{activity.title}</h3>

                  <p className="text-sm text-slate-400 mt-1">
                    {activity.description}
                  </p>

                  <span className="text-xs text-slate-500">
                    {activity.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
