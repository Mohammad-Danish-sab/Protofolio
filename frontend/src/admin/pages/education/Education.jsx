import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import EducationTable from "../../components/education/EducationTable";
import EducationModal from "../../components/education/EducationModal";

import { getEducations } from "../../services/educationService";

export default function Education() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const fetchEducations = async () => {
    try {
      setLoading(true);

      const data = await getEducations();

      setEducations(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load education");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEducations();
  }, []);

  return (
    <AdminLayout title="Education">
      <PageHeader title="Education" subtitle="Manage education details" />

      <div className="flex justify-end mb-6">
        <Button
          onClick={() => {
            setSelectedEducation(null);
            setModalOpen(true);
          }}
        >
          <Plus size={18} />
          Add Education
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : educations.length === 0 ? (
        <EmptyState
          title="No Education Found"
          description="Create your first education."
        />
      ) : (
        <EducationTable
          educations={educations}
          refreshEducations={fetchEducations}
          onEdit={(item) => {
            setSelectedEducation(item);
            setModalOpen(true);
          }}
        />
      )}

      <EducationModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedEducation(null);
        }}
        education={selectedEducation}
        refreshEducations={fetchEducations}
      />
    </AdminLayout>
  );
}
