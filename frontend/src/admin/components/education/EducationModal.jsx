import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import EducationForm from "./EducationForm";

import {
  createEducation,
  updateEducation,
} from "../../services/educationService";

export default function EducationModal({
  open,
  onClose,
  education,
  refreshEducations,
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      if (education?.id) {
        await updateEducation(education.id, formData);

        toast.success("Education updated successfully");
      } else {
        await createEducation(formData);

        toast.success("Education created successfully");
      }

      await refreshEducations();

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
      title={education ? "Update Education" : "Add New Education"}
      size="4xl"
    >
      <EducationForm
        initialData={education}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Modal>
  );
}
