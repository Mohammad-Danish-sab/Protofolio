import { useMemo, useState } from "react";
import { Pencil, Trash2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

import Card from "../common/Card";
import SearchBar from "../common/SearchBar";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteProject } from "../../services/projectService";

export default function ProjectTable({
  projects = [],
  refreshProjects,
  onEdit,
}) {
  const [search, setSearch] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase();

    return projects.filter((project) => {
      const tech = Array.isArray(project.tech_stack)
        ? project.tech_stack.join(", ")
        : project.tech_stack || "";

      return (
        project.title?.toLowerCase().includes(query) ||
        tech.toLowerCase().includes(query)
      );
    });
  }, [projects, search]);

  const handleDelete = async () => {
    if (!selectedProject) return;

    try {
      await deleteProject(selectedProject.id);

      toast.success("Project deleted successfully");

      await refreshProjects();

      setDeleteOpen(false);
      setSelectedProject(null);
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.detail || "Failed to delete project");
    }
  };

  return (
    <>
      <Card>
        {/* Top */}

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="w-full md:w-96">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
            />
          </div>

          <div className="text-sm text-slate-400">
            Total Projects :
            <span className="ml-2 font-bold text-cyan-400">
              {filteredProjects.length}
            </span>
          </div>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-4 text-left">Image</th>
                <th className="text-left">Title</th>
                <th className="text-left">Tech Stack</th>
                <th className="text-center">GitHub</th>
                <th className="text-center">Live</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-slate-400">
                    No Projects Found
                  </td>
                </tr>
              ) : (
                filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                  >
                    {/* Image */}

                    <td className="py-5">
                      <img
                        src={
                          project.image ||
                          "https://placehold.co/300x200?text=No+Image"
                        }
                        alt={project.title}
                        className="w-20 h-14 rounded-xl object-cover border border-slate-700 bg-slate-800"
                      />
                    </td>

                    {/* Title */}

                    <td>
                      <h3 className="font-semibold text-white">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-400 line-clamp-2 mt-1">
                        {project.description}
                      </p>
                    </td>

                    {/* Tech Stack */}

                    <td>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                        {Array.isArray(project.tech_stack)
                          ? project.tech_stack.join(", ")
                          : project.tech_stack}
                      </span>
                    </td>

                    {/* GitHub */}

                    <td className="text-center">
                      {project.github_link ? (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                        >
                          <FaGithub
                            size={20}
                            className="hover:text-cyan-400 transition"
                          />
                        </a>
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>

                    {/* Live */}

                    <td className="text-center">
                      {project.live_link ? (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                        >
                          <ExternalLink
                            size={20}
                            className="hover:text-green-400 transition"
                          />
                        </a>
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>

                    {/* Actions */}

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => onEdit(project)}
                          className="w-10 h-10 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 transition flex items-center justify-center"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => {
                            setSelectedProject(project);
                            setDeleteOpen(true);
                          }}
                          className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500 transition flex items-center justify-center"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <ConfirmDelete
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title="Delete Project"
        description="Are you sure you want to delete this project? This action cannot be undone."
      />
    </>
  );
}
