import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import ServiceForm from "./ServiceForm";

import {
  createService,
  updateService,
} from "../../services/serviceService";

export default function ServiceModal({
  open,
  onClose,
  service,
  refreshServices,
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      if (service) {
        await updateService(service.id, formData);

        toast.success("Service updated successfully");
      } else {
        await createService(formData);

        toast.success("Service created successfully");
      }

      await refreshServices();

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
        service
          ? "Update Service"
          : "Add New Service"
      }
      size="lg"
    >
      <ServiceForm
        initialData={service}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Modal>
  );
}