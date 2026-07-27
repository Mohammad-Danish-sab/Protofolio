import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import ServiceTable from "../../components/services/ServiceTable";
import ServiceModal from "../../components/services/ServiceModal";

import { getServices } from "../../services/serviceService";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);

      const data = await getServices();

      setServices(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedService(null);
    setModalOpen(true);
  };

  const handleEdit = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <AdminLayout title="Services">
      <PageHeader title="Services" subtitle="Manage your portfolio services" />

      <div className="flex justify-end mb-6">
        <Button onClick={handleAdd}>
          <Plus size={18} />
          <span>Add Service</span>
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : services.length === 0 ? (
        <EmptyState
          title="No Services Found"
          description="Create your first service."
        />
      ) : (
        <ServiceTable
          services={services}
          refreshServices={fetchServices}
          onEdit={handleEdit}
        />
      )}

      <ServiceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selectedService}
        refreshServices={fetchServices}
      />
    </AdminLayout>
  );
}
