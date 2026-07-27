import { FolderKanban } from "lucide-react";
import Card from "../common/Card";

export default function RecentProjects({ projects = [] }) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <FolderKanban className="text-cyan-400" size={22} />
        <h2 className="text-xl font-semibold">Recent Projects</h2>
      </div>

      {projects.length === 0 ? (
        <p className="text-slate-400">No recent projects.</p>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-4 border-b border-slate-800 pb-4 last:border-none"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-14 h-14 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{project.title}</h3>

                <p className="text-sm text-slate-400 line-clamp-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
