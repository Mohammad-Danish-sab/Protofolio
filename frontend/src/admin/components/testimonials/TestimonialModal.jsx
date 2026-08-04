import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import TestimonialForm from "./TestimonialForm";

import {
  createTestimonial,
  updateTestimonial,
} from "../../services/testimonialService";

export default function TestimonialModal({
  open,
  onClose,
  testimonial,
  refreshTestimonials,
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      if (testimonial?.id) {
        await updateTestimonial(testimonial.id, formData);

        toast.success("Testimonial updated successfully");
      } else {
        await createTestimonial(formData);

        toast.success("Testimonial created successfully");
      }

      await refreshTestimonials();

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
      title={testimonial ? "Update Testimonial" : "Add New Testimonial"}
      size="4xl"
    >
      <TestimonialForm
        initialData={testimonial}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Modal>
  );
}
