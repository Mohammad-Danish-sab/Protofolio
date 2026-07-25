import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import ProjectTable from "../../components/projects/ProjectTable";
import ProjectModal from "../../components/projects/ProjectModal";
import ProjectSkeleton from "../../components/projects/ProjectSkeleton";

import { getProjects } from "../../services/projectService";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const data = await getProjects();

      setProjects(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProject = () => {
    setSelectedProject(null);
    setModalOpen(true);
  };

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <AdminLayout title="Projects">
      <PageHeader title="Projects" subtitle="Manage your portfolio projects" />

      <div className="flex justify-end mb-6">
        <Button onClick={handleAddProject}>
          <Plus size={18} />
          Add Project
        </Button>
      </div>

      {loading ? (
        <ProjectSkeleton />
      ) : (
        <ProjectTable
          projects={projects}
          onEdit={handleEditProject}
          refreshProjects={fetchProjects}
        />
      )}

      <ProjectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
        refreshProjects={fetchProjects}
      />
    </AdminLayout>
  );
}
