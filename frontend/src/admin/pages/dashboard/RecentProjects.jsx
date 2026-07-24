export default function RecentProjects({ projects }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-6">Recent Projects</h2>

      <div className="space-y-4">
        {projects.length === 0 ? (
          <p className="text-slate-400">No Projects</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="border-b border-white/10 pb-3">
              <h3>{project.title}</h3>

              <p className="text-sm text-slate-400">{project.tech_stack}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
