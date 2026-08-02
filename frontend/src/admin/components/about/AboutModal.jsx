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

      if (about) {
        await updateAbout(about.id, formData);

        toast.success("About updated");
      } else {
        await createAbout(formData);

        toast.success("About created");
      }

      await refreshAbout();

      onClose();
    } catch (err) {
      console.error(err);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={about ? "Update About" : "Create About"}
      size="xl"
    >
      <AboutForm
        initialData={about}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Modal>
  );
}
