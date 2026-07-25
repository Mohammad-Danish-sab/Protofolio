import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import SkillForm from "./SkillForm";

import {
  createSkill,
  updateSkill,
} from "../../services/skillService";

export default function SkillModal({
  open,
  onClose,
  skill,
  refreshSkills,
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      if (skill) {
        await updateSkill(skill.id, formData);

        toast.success("Skill updated successfully");
      } else {
        await createSkill(formData);

        toast.success("Skill created successfully");
      }

      await refreshSkills();

      onClose();
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        skill
          ? "Update Skill"
          : "Add New Skill"
      }
      size="lg"
    >
      <SkillForm
        initialData={skill}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Modal>
  );
}