import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import ProjectTable from "../../components/projects/ProjectTable";

import { getProjects } from "../../services/projectService";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <AdminLayout title="Projects">
      <PageHeader
        title="Projects"
        subtitle="Manage all portfolio projects"
        buttonText="+ Add Project"
      />

      {loading ? (
        <Loader />
      ) : projects.length === 0 ? (
        <EmptyState
          title="No Projects Found"
          description="Create your first project."
        />
      ) : (
        <ProjectTable projects={projects} refreshProjects={fetchProjects} />
      )}
    </AdminLayout>
  );
}
