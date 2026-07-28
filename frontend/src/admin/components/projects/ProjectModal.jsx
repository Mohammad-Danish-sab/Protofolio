import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import ProjectForm from "./ProjectForm";

import { createProject, updateProject } from "../../services/projectService";

export default function ProjectModal({
  open,
  onClose,
  project,
  refreshProjects,
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);

      if (project) {
        await updateProject(project.id, data);
        toast.success("Project updated successfully");
      } else {
        await createProject(data);
        toast.success("Project created successfully");
      }

      await refreshProjects();

      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={project ? "Edit Project" : "Add Project"}
      size="xl"
    >
      <ProjectForm
        initialData={project}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Modal>
  );
}
