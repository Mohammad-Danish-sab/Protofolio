import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import AboutForm from "./AboutForm";

import { createAbout, updateAbout } from "../../services/aboutService";

export default function AboutModal({ open, onClose, about, refreshAbout }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      if (about?.id) {
        await updateAbout(about.id, formData);
        toast.success("About section updated successfully");
      } else {
        await createAbout(formData);
        toast.success("About section created successfully");
      }

      await refreshAbout();

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
      title={about ? "Edit About Section" : "Add About Section"}
      size="4xl"
    >
      <AboutForm
        initialData={about}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Modal>
  );
}
