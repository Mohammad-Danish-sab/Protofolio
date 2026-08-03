import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import ExperienceForm from "./ExperienceForm";

import {
  createExperience,
  updateExperience,
} from "../../services/experienceService";

export default function ExperienceModal({
  open,
  onClose,
  experience,
  refreshExperiences,
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      if (experience?.id) {
        await updateExperience(experience.id, formData);

        toast.success("Experience updated successfully");
      } else {
        await createExperience(formData);

        toast.success("Experience created successfully");
      }

      await refreshExperiences();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={experience ? "Update Experience" : "Add New Experience"}
      size="4xl"
    >
      <ExperienceForm
        initialData={experience}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Modal>
  );
}
