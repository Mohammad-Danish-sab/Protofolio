import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import TestimonialTable from "../../components/testimonials/TestimonialTable";
import TestimonialModal from "../../components/testimonials/TestimonialModal";

import { getTestimonials } from "../../services/testimonialService";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);

      const data = await getTestimonials();

      setTestimonials(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <AdminLayout title="Testimonials">
      <PageHeader title="Testimonials" subtitle="Manage client testimonials" />

      <div className="flex justify-end mb-6">
        <Button
          onClick={() => {
            setSelectedTestimonial(null);
            setModalOpen(true);
          }}
        >
          <Plus size={18} />
          Add Testimonial
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : testimonials.length === 0 ? (
        <EmptyState
          title="No Testimonials"
          description="Create your first testimonial."
        />
      ) : (
        <TestimonialTable
          testimonials={testimonials}
          refreshTestimonials={fetchTestimonials}
          onEdit={(item) => {
            setSelectedTestimonial(item);
            setModalOpen(true);
          }}
        />
      )}

      <TestimonialModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedTestimonial(null);
        }}
        testimonial={selectedTestimonial}
        refreshTestimonials={fetchTestimonials}
      />
    </AdminLayout>
  );
}
