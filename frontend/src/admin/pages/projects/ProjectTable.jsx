import { useMemo, useState } from "react";
import { Pencil, Trash2, ExternalLink, Github, Plus } from "lucide-react";
import toast from "react-hot-toast";

import SearchBar from "../common/SearchBar";
import Button from "../common/Button";
import Card from "../common/Card";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteProject } from "../../services/projectService";

export default function ProjectTable({ projects, refreshProjects }) {
  const [search, setSearch] = useState("");

  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [projects, search]);

  const handleDelete = async () => {
    if (!selectedProject) return;

    try {
      await deleteProject(selectedProject.id);

      toast.success("Project deleted successfully");

      setDeleteModal(false);

      refreshProjects();
    } catch (err) {
      toast.error("Failed to delete project");
    }
  };

  return (
    <>
      <Card>
        {/* Top Bar */}

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="w-full md:w-96">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Projects..."
            />
          </div>

          <Button>
            <Plus size={18} />
            Add Project
          </Button>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4">Image</th>

                <th className="text-left">Title</th>

                <th className="text-left">Tech Stack</th>

                <th className="text-left">GitHub</th>

                <th className="text-left">Live</th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProjects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  {/* Image */}

                  <td className="py-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-20 h-14 rounded-lg object-cover"
                    />
                  </td>

                  {/* Title */}

                  <td>
                    <h3 className="font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm line-clamp-1">
                      {project.description}
                    </p>
                  </td>

                  {/* Tech */}

                  <td>
                    <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {project.tech_stack}
                    </span>
                  </td>

                  {/* Github */}

                  <td>
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="hover:text-cyan-400" size={20} />
                    </a>
                  </td>

                  {/* Live */}

                  <td>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink
                        className="hover:text-green-400"
                        size={20}
                      />
                    </a>
                  </td>

                  {/* Actions */}

                  <td>
                    <div className="flex justify-center gap-3">
                      <button className="w-10 h-10 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 transition flex items-center justify-center">
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setDeleteModal(true);
                        }}
                        className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500 transition flex items-center justify-center"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <ConfirmDelete
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
